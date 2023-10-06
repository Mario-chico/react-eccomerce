import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  
  if(index === 'last') index = context.order.length - 1;
  console.log("index", index)
  console.log(context.order?.slice(-1)[0]);
  console.log('Este log lo quiero ver')
  return (
    <>
      <div className='flex items-center w-80 relative justify-center mb-4' >
        <Link to='/my-orders' className='absolute left-0'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
          </svg>
        
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        
        {context.order?.[index].products.map((product) => (
          <OrderCard
            key = {product.id} 
            id = {product.id}
            title= {product.title}
            imageUrl = {product.images}
            price = {product.price}
          />
        ))}
      </div>
    </>
  );
}

export { MyOrder };