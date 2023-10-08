import { createContext, useEffect, useState } from "react";

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

  // Shopping Cart Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);

  // Create a state to filter items
  const [filter, setFilter] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  console.log(searchByTitle);

  // Create a function to filter items based on searchByTitle state
  
  const filterItems = (items, searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }
  // Create an effect to update the items state based on the searchByTitle state
  useEffect(() => {
    if (searchByTitle) setFilter(filterItems(items, searchByTitle));
    else setFilter(items);
  } ,[items, searchByTitle]);

  console.log(filter);

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
      toggleCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filter,
      setFilter
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

