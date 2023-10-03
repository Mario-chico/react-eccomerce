import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen);

  const [productToshow, setProductToshow] = useState({});
  
  // Shopping Cart 🛒 Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const toggleCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);

  return (
    <ShoppingCartContext.Provider value={
      {count,
      setCount,
      toggleProductDetail,
      isProductDetailOpen,
      productToshow,
      setProductToshow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      setIsCheckoutSideMenuOpen,
      toggleCheckoutSideMenu
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

