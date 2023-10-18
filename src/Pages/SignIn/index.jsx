import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { render } from "react-dom";



function SignIn() {

  const context = useContext(ShoppingCartContext);
  const[view, setView] = useState('user-info');
  // Account. Getting the account from localstorage if exists 
  const account = localStorage.getItem('account');
  // Parsed to an object the account string
  const parsedAccount = JSON.parse(account);

  //Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalState;

  const renderLogin = () => {
    return (
      <>
        <form action="" className="flex flex-col w-60 h-80">
          <label className="mb-2 font-light text-sm" htmlFor="">username</label>
          <input className=" border-2 border-solid border-lime-400 rounded-lg text-lg p-1 mb-2" placeholder="username" type="email" name="" id="" />
          <span>{parsedAccount?.username}</span>
          <label className="mb-2 font-light text-sm" htmlFor="">password</label>
          <input className="mb-2 border-2 border-solid border-lime-400 rounded-lg text-lg p-1" placeholder="password" type="password" name="" id="" />
          <span>{parsedAccount?.password}</span>
          <Link to='/'>
            <input className="bg-orange-300 text-white rounded-lg p-1 mb-2 text-center text-lg mt-2" placeholder="subir" name="" id="" disabled={!hasUserAnAccount}/>
          </Link>
        </form>
        <div className='text-center'>
          <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
        </div>
        <button 
          className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3'
          onClick={() => setView('create-user-info')}
          disabled={hasUserAnAccount}>
          Sign Up
        </button>
      </>
    )
  }
  const renderCreareUserInfo = () => {

  }

  const renderView = () => view === 'create-user-info' ? renderCreareUserInfo() : renderLogin();

  return (
    <>
      <h1 className="mt-24">Bienvenuti</h1>
      {renderView()}
    </>
  );
}

export { SignIn };