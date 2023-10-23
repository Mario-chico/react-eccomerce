import { useContext, useRef, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link, Navigate } from "react-router-dom";
import { data } from "autoprefixer";

function SignIn() {

  const context = useContext(ShoppingCartContext);

  const [view, setView] = useState('user-info');
  const form = useRef(null);
  // Account. Getting the account from localstorage if exists 
  const account = localStorage.getItem('account');
  // Parsed to an object the account string
  const parsedAccount = JSON.parse(account);

  //Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    }
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem('account', stringifiedAccount);
    context.setAccount(data);

    handleSignIn();
  }

  
  const renderLogin = () => {
    return (
      <>
        <form action="" className="flex flex-col w-60 h-80 gap-1">
          <label className="mb-2 font-light text-sm" htmlFor="">username</label>
          <input className=" border-2 border-solid border-lime-400 rounded-lg text-lg p-1 mb-2" placeholder="username" type="email" name="" id="" />
          <span>{parsedAccount?.username}</span>
          <label className="mb-2 font-light text-sm" htmlFor="">password</label>
          <input className="mb-2 border-2 border-solid border-lime-400 rounded-lg text-lg p-1" placeholder="password" type="password" name="" id="" />
          <span>{parsedAccount?.password}</span>
          <Link to='/'>
            <input className="bg-orange-300 text-white rounded-lg p-1 mb-2 text-center text-lg mt-2" placeholder="subir" name="" id="" onClick={() => handleSignIn()} disabled={!hasUserAnAccount}/>
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
  const renderCreateUserInfo = () => {
    return ( 
      <form ref={form} className="flex flex-col gap-4 w-60">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium" htmlFor="name" >Tu nombre aquí:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            defaultValue={parsedAccount?.name} 
            placeholder="Parker"
            className="border-2 border-solid border-black/40 rounded-lg text-base p-1 focus:outline-none" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium" htmlFor="email" >Tu email aquí:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            defaultValue={parsedAccount?.email} 
            placeholder="ignohu@correo.com"
            className="border-2 border-solid border-black/40 rounded-lg text-base p-1 focus:outline-none" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium" htmlFor="password" >Tu contraseña aquí:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            defaultValue={parsedAccount?.password} 
            placeholder="XXXXXXXXXXXXXXXX"
            className="border-2 border-solid border-black/40 placeholder:text-black/60  rounded-lg text-base p-1 focus:outline-none" />
        </div>
        <Link to='/'>
          <button
            className="bg-black text-white w-full rounded-lg py-3"
            onClick={() => createAnAccount()}>

            Create
          </button>
        </Link>
      </form>
    )
  }

  const handleSignIn = () => {
    const stringifiedSingOut = JSON.stringify(false);
    localStorage.setItem('sign-out', stringifiedSingOut);
    context.setSignOut(false);

    return <Navigate replace to={'/'}/>
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin();

  return (
    <>
      <h1 className="mt-24 mb-8 text-center">Bienvenuti</h1>
      {renderView()}
    </>
  );
}

export { SignIn };