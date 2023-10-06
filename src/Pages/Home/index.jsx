import { useContext } from 'react';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';
function Home() {

  const context = useContext(ShoppingCartContext);

  return (
    <>
      <div className='flex items-center justify-center w-80 mb-4'>
        <h1 className='font-medium text-xl'>Home</h1>
      </div>
      <input className='border rounded border-black mb-4 p-1 h-7' onChange={(event) => context.setSearchByTitle(event.target.value) } type='text' placeholder='Busquele, busquele bien' name='' id='' />
      <div className='grid gap-2 grid-cols-4 w-full max-w-xl lg:max-w-2xl'>
         {
          context.items?.map((item) =>(
            <Card key={item.id} data={item}/>
          ))
        } 
      </div>
      <ProductDetail/>
    </>
  );
}

export { Home };