import HomePage from '../pages/home'

import MedTech from '../pages/medtech';
import MedTechPage from '../pages/medtech-page';
import Product from "../pages/product";
import Products from "../pages/products";

const mainRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "medtech",
    children: [
      {
        index: true,
        element: <MedTech />,
      },
      {
        path: ":medtechId",
        element: <MedTechPage />,
      },
    ],
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