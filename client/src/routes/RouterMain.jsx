import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements

} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";

const RouterMain = () => {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={routers} />
  )
}

export default RouterMain