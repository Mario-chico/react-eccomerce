import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className="flex justify-between items-center fixed w-full py-4 px-8 text-sm font-light">
      <ul className="flex flex-row gap-3" >
        <li>
          <NavLink 
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            All
          </NavLink>
          all
        </li>
        <li>
          <NavLink to='/clothes'>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics'>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/forniture'>
            Forniture
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys'>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/items'>
            Items
          </NavLink>
        </li>
      </ul>
      <ul className="flex flex-row items-center gap-3">
        <li className="text-black/60">
          correo@correo
        </li>
        <li>
          <NavLink to='/my-orders'>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account'>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'>
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-order'>
            🛒0
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };