import { useContext } from 'react';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';
function Home() {

  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    // Create an if condition to check if the length of the searchByTitle based on the context is up to 0 and return context.filter
    if(context.searchByTitle?.length > 0){
      if(context.filter?.length > 0){
       return (
          context.filter?.map((item) =>(
            <Card key={item.id} data={item}/>
          ))
        )
      }else{
        return ( <div>No mames we buscale bien</div>
        )
      }
    }else{
      return (
          context.items?.map((item) =>(
            <Card key={item.id} data={item}/>
          ))
      )
    }
  }

  return (
    <>
      <div className='flex items-center justify-center w-80 mb-4'>
        <h1 className='font-medium text-xl'>Home</h1>
      </div>
      <input className='border rounded border-black mb-4 p-1 h-7' onChange={(event) => context.setSearchByTitle(event.target.value) } type='text' placeholder='Busquele, busquele bien' name='' id='' />
      <div className='grid gap-2 grid-cols-4 w-full max-w-xl lg:max-w-2xl'>
        {renderView()}
      </div>
      <ProductDetail/>
    </>
  );
}

export { Home };