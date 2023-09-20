import { useRoutes, BrowserRouter as Routes, Route } from "react-router-dom"
import { Home }from "../Home"
import { MyAccount } from "../MyAccount"
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"
import { NotFound } from "../NotFound"
import { SignIn } from "../SignIn"
import { Navbar } from "../../Components/Navbar"
import "./App.css"
import { Layout } from "../../Components/Layout"

const AppRoutes =  () => {
  let routes = useRoutes([
    {path: "/", element: <Home />}
    ,{path: "/my-account", element: <MyAccount />}
    ,{path: "/my-orders", element: <MyOrders />}
    ,{path: "/my-order/:id", element: <MyOrder />}
    ,{path: "/sign-in", element: <SignIn />}
    ,{path: "*", element: <NotFound />}
  ])

  return routes;
}

function App() {
  return (
    <Routes>
      <Navbar/>
      <Layout>
        <AppRoutes/>
      </Layout>
      
    </Routes>
  )
}

export default App