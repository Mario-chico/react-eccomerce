
const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props
  
  return (
    <div className='flex justify-between items-center border border-black'>
      
      <p>
        <span>04-10-2023</span>
        <span>{totalPrice}</span>
        <span>{totalProducts}</span>
      </p>
      
    </div>
  )
}

export {OrdersCard}