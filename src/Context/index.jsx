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
  
  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  // Create a function to filter items based on searchByTitle state
  const filterItems = (items, searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }

  const filterItemsByCategory  = (items, searchByCategory) => {
    return items?.filter((item) => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filterItems(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filterItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filterItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilter(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilter(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilter(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilter(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

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
      setFilter,
      searchByCategory, 
      setSearchByCategory
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

