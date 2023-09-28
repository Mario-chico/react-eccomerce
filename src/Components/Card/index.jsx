import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  return (
    <div className='bg-white cursor-pointer w-28 lg:w-52 h-32 lg:h-56 rounded-lg box-border shadow-lg '>
      
      <figure className='relative mb-2 w-full h-4/5  '>
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 px-1 lg:m-2 lg:px-2 py-0.5">{data.data.category.name}</span>
        <img className="h-full w-full object-cover rounded-lg" src={data.data.images} alt={data.data.description} />
        <button className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 px-2 py-0.5' onClick={() => context.setCount(context.count + 1)}>
          +
        </button>
      </figure>
      <p className='flex justify-between'>
        <span className='lg:text-sm text-xs font-light'>Patines</span>
        <span className='lg:text-md text-sm font-medium'>${data.data.price}</span>
      </p>
      
    </div>
  );
}

export { Card }