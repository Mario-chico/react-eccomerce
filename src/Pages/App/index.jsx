import { useContext } from "react"
import { useRoutes, BrowserRouter as Routes, Navigate} from "react-router-dom"
import { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage} from "../../Context"
import { Home }from "../Home"
import { MyAccount } from "../MyAccount"
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"
import { NotFound } from "../NotFound"
import { SignIn } from "../SignIn"
import { Navbar } from "../../Components/Navbar"
import { Layout } from "../../Components/Layout"
import { Tests } from "../Tests"
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import "./App.css"

const AppRoutes =  () => {
  const context = useContext(ShoppingCartContext);
  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);
  // Sign Out
  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = parsedAccount ? Object.keys(context.account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signOut || parsedSignOut;
  
  let routes = useRoutes([
    {path: "/", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>}
    ,{path: "/clothes", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>}
    ,{path: "/electronics", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>}
    ,{path: "/forniture", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>}
    ,{path: "/toys", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>}
    ,{path: "/my-account", element: <MyAccount />}
    ,{path: "/tests", element: <Tests />}
    ,{path: "/my-orders", element: <MyOrders />}
    ,{path: "/my-orders/last", element: <MyOrder />}
    ,{path: "/my-orders/:id", element: <MyOrder />}
    ,{path: "/sign-in", element: <SignIn />}
    ,{path: "*", element: <NotFound />}
  ])

  return routes;
}

function App() {
  initializeLocalStorage();
  return (
    <ShoppingCartProvider>
      <Routes>
        <Navbar/>
        <Layout>
          <AppRoutes/>
        </Layout>
      <CheckoutSideMenu/>
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App