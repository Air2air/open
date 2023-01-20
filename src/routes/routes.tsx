import { lazy } from "react";

const HomePage = lazy(() => import("pages/Home"));

export const dataRoutes = [
  {
    id: "Home",
    path: "/",
    section: "Home",
    element: <HomePage />,
  },
];
