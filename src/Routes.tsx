import { Route, Routes as BaseRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import Products from "./pages/products";
import Product from "./pages/product";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="products">
        <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} />
      </Route>
    </BaseRoutes>
  );
}