import { useRoutes, BrowserRouter as Routes} from "react-router-dom"
import { ShoppingCartProvider} from "../../Context"
import { Home }from "../Home"
import { MyAccount } from "../MyAccount"
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"
import { NotFound } from "../NotFound"
import { SignIn } from "../SignIn"
import { Navbar } from "../../Components/Navbar"
import "./App.css"
import { Layout } from "../../Components/Layout"
import { Tests } from "../Tests"
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

const AppRoutes =  () => {
  let routes = useRoutes([
    {path: "/", element: <Home />}
    ,{path: "/my-account", element: <MyAccount />}
    ,{path: "/tests", element: <Tests />}
    ,{path: "/my-orders", element: <MyOrders />}
    ,{path: "/my-order/:id", element: <MyOrder />}
    ,{path: "/sign-in", element: <SignIn />}
    ,{path: "*", element: <NotFound />}
  ])

  return routes;
}

function App() {
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