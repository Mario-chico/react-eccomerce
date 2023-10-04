import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4 decoration-solid text-violet-600'
  let leftMenu = [{
    to: '/',
    className: 'font-semibold text-lg',
    text: 'Shopi'
  },
  {
    to: '/',
    className: '',
    text: 'All'
  },
  {
    to: '/clothes',
    className: '',
    text: 'Clothes'
  },
  {
    to: '/electronics',
    className: '',
    text: 'Electronics'
  },
  {
    to: '/forniture',
    className: '',
    text: 'Forniture'
  },
  {
    to: '/toys',
    className: '',
    text: 'Toys'
  },
  {
    to: '/items',
    className: '',
    text: 'Items'
  },
  {
    to: '/tests',
    className: '',
    text: 'Tests'
  },
  {
    to: '/records',
    className: '',
    text: 'Records'
  },
];
  return (
    <nav className="flex justify-between top-0 z-10 items-center fixed w-full py-1 lg:py-4 px-4 text-xs font-normal bg-amber-500">
      <ul className="flex flex-row gap-2 text-emerald-800" >
        {leftMenu.map((item) => (
          <li key={item.text} className={item.className}>
            <NavLink 
              to={item.to} 
              className={({ isActive }) =>
                isActive ? activeStyle : undefined}>
                  {item.text}
              </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex flex-row items-center gap-1">
        <li className="text-black/60">
          correo@correo
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };