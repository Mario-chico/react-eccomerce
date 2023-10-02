import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen);
  const [productToshow, setProductToshow] = useState({});

  return (
    <ShoppingCartContext.Provider value={{count, setCount, toggleProductDetail, isProductDetailOpen, productToshow, setProductToshow}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

