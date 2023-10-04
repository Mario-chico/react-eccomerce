import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  const productShow = (productDetail) => {
    context.toggleProductDetail();
    context.setProductToshow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.toggleCheckoutSideMenu();
    console.log('Click al boton mas')
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
    if(isInCart){
      return (
        <button className='absolute top-0 right-0 flex justify-center items-center bg-black/70 w-6 h-6 rounded-full m-2 px-2 py-0.5' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
           <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </button>
      )
    }else{
      return(
        <button className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 px-2 py-0.5' onClick={(event) => addProductsToCart(event, data.data)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      )
    }
    
  }

  return (
    <div className='bg-white cursor-pointer w-28 lg:w-36 h-32 lg:h-40 rounded-lg box-border shadow-lg ' onClick={() => productShow(data.data)}>
      
      <figure className='relative mb-2 w-full h-4/5  '>
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 px-1 lg:m-2 lg:px-2 py-0.5">{data.data.category.name}</span>
        <img className="h-full w-full object-cover rounded-lg" src={data.data.images} alt={data.data.description} />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='lg:text-sm text-xs font-light'>{data.data.title}</span>
        <span className='lg:text-md text-sm font-medium'>${data.data.price}</span>
      </p>
      
    </div>
  );
}

export { Card }