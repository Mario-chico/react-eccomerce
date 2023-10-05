
const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <svg onClick={() => handleDelete(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  }
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <figure className='h-2/5 w-2/5 p-1 ' >
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-xs font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {renderXMarkIcon}
      </div>
      
    </div>
  )
}

export {OrderCard}