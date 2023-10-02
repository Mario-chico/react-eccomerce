import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context";
import './styles.css';
const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  console.log('PRODUCT ', context.productToshow);
  return (
    <aside className={` ${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col product-detail fixed right-0 bg-white rounded-lg border border-black w-80`}>
      <div className='flex justify-between items-center p-1'>
        <h2 className='font-medium text-lg'>Detalles del producto</h2>
        <svg onClick={() => context.toggleProductDetail()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <figure className='w-2/4 h-2/4 m-auto'>
        <img src={context.productToshow?.images} alt={context.productToshow.title} className=' w-full h-full rounded-lg'/>
      </figure>
      <p className='flex flex-col px-4'>
        <span className='font-medium text-lg'>${context.productToshow.price}</span>
        <span className='font-normal text-md'>{context.productToshow.title}</span>
        <span className='font-light text-xs'>{context.productToshow.description}</span>
      </p>
    </aside>
  )
}

export {ProductDetail};


