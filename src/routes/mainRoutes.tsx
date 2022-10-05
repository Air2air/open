import HomePage from '../pages/home'
import Product from "../pages/product";
import Products from "../pages/products";

const mainRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "products",
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: ":productId",
        element: <Product />,
      },
    ],
  },
];

export default mainRoutes;