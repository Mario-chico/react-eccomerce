
const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props
  const date = new Date();
  return (
    <div className='flex justify-between items-center border mb-3 w-48 border-black'>
      
      <p className='flex flex-col w-60 ml-1'>
        <span className='font-light text-xs'>{date.toLocaleDateString()}</span>
        <span className='font-light text-xs'>{totalProducts} articles</span>
      </p>
      <p className='flex items-center '>
        <span className='font-medium mx-1'>${totalPrice}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

      </p>
      
    </div>
  )
}

export {OrdersCard}