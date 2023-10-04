import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from "../../Context";
import './styles.css';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';
const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const handleDelete = (id) => {
    const filteredOut = context.cartProducts.filter( product => product.id != id);
    context.setCartProducts(filteredOut);
  }
  const handleCheckout = () => {
    const orderToAdd = {
      date : '03-10-2023',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    console.log(orderToAdd);
    context.setOrder([...context.order, orderToAdd]); //La orden tiene lo que tiene anteriormente más orderToAdd
    context.setCartProducts([])
  }
  return (
    <aside className={` ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col checkout-side-menu fixed right-0 bg-white rounded-lg border border-black w-80`}>
      <div className='flex justify-between items-center p-1'>
        <h2 className='font-medium text-lg'>El side menu we</h2>
        <svg onClick={() => context.toggleCheckoutSideMenu()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className='overflow-y-scroll flex-1'>
        
        {context.cartProducts.map((product) => (
          <OrderCard
            key = {product.id} 
            id = {product.id}
            title= {product.title}
            imageUrl = {product.images}
            price = {product.price}
            handleDelete = {handleDelete}
          />
        ))}
      </div>
      <div className='px-6 mb-3'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-lg'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='rounded-lg bg-black w-full text-white py-1 ' onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export {CheckoutSideMenu};


