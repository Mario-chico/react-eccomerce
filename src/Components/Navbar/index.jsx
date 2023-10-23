import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { ShoppingCart} from '../ShoppingCart';
const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4 decoration-solid text-violet-600'
  
  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;
  
  let leftMenu = [{
    to: isUserSignOut ? '/sign-in' : '/',
    className: 'font-semibold text-lg',
    text: 'Shopi',
    onClick: () => context.setSearchByCategory()
  },
  {
    to: '/',
    className: '',
    text: 'All',
    onClick: () => context.setSearchByCategory()
  },
  {
    to: '/clothes',
    className: '',
    text: 'Clothes',
    onClick: () => context.setSearchByCategory('clothes')
  },
  {
    to: '/electronics',
    className: '',
    text: 'Electronics',
    onClick: () => context.setSearchByCategory('electronics')
  },
  {
    to: '/forniture',
    className: '',
    text: 'Forniture',
    onClick: () => context.setSearchByCategory('furniture')
  },
  {
    to: '/toys',
    className: '',
    text: 'Toys',
    onClick: () => context.setSearchByCategory('toys')
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



  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = parsedAccount ? Object.keys(context.account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

const handleSignOut = () => {
  const stringifiedSignOut = JSON.stringify(true);
  localStorage.setItem('signOut', stringifiedSignOut);
  context.setSignOut(true);
}
const renderView = () => {
  if(hasUserAnAccount && !isUserSignOut) {
    return (
      <>
        <li className='text-black/60'>
          {parsedAccount?.email}
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
            to='/sign-in'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
            }
            onClick={() => handleSignOut()}>
            Sign Out
          </NavLink>
        </li>
      </>
    )
  }else{
    return (
      <li>
        <NavLink
          to='/sign-in'
          className={({ isActive }) =>
          isActive ? activeStyle : undefined
          }
          onClick={() => handleSignOut()}>
          Sign In
        </NavLink>
      </li>
    )
  }
}
  return (
    <nav className='flex justify-between top-0 z-10 items-center fixed w-full py-1 lg:py-4 px-4 text-xs font-normal bg-amber-500'>
      <ul className='flex flex-row gap-2 text-emerald-800' >
        {leftMenu.map((item) => (
          <li key={item.text} className={item.className}>
            <NavLink 
              to={item.to} 
              onClick={item.onClick}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined}>
                  {item.text}
              </NavLink>
          </li>
        ))}
      </ul>
      <ul className='flex flex-row items-center gap-1'>
          {renderView()}
          <li className='flex items-center'>
            <ShoppingCart />
          </li>
      </ul>
    </nav>
  );
}

export { Navbar };