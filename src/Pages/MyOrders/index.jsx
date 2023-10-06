import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
    <div className='flex items-center justify-center w-80 mb-4'>
      <h1 className='font-medium text-xl'>MyOrders</h1>
    </div>
      
      {
        context.order?.map((order,index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice = {order.totalPrice}
              totalProducts = {order.totalProducts}
            />
          </Link>
        ))
      }
    </>
  );
}

export { MyOrders };