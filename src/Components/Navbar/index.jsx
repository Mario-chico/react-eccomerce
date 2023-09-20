import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <nav className="flex justify-between top-0 z-10 items-center fixed w-full py-4 px-8 text-sm font-medium bg-amber-500">
      <ul className="flex flex-row gap-3 text-emerald-800" >
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
      <ul className="flex flex-row items-center gap-3">
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
          🛒 0
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };