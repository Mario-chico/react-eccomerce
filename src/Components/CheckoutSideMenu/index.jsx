import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context";
import './styles.css';
import { OrderCard } from '../OrderCard';
const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside className={` ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col checkout-side-menu fixed right-0 bg-white rounded-lg border justify-between border-black w-80`}>
      <div className='flex justify-between items-center p-1'>
        <h2 className='font-medium text-lg'>El side menu we</h2>
        <svg onClick={() => context.toggleCheckoutSideMenu()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      {context.cartProducts.map((product) => (
        <OrderCard
          key = {product.id} 
          title= {product.title}
          imageUrl = {product.image}
          price = {product.price}
        />
      ))}
    </aside>
  )
}

export {CheckoutSideMenu};


