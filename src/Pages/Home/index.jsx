import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    try {
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
    } catch (error) {
      console.error(error.message)
    }
  }, []);
  

  return (
    <>
      <p> Home</p>
      <div className="grid gap-2 grid-cols-4 w-full max-w-xl lg:max-w-2xl">
         {
          items?.map((item) =>(
            <Card key={item.id} data={item}/>
          ))
        } 
      </div>
      <ProductDetail/>
    </>
  );
}

export { Home };