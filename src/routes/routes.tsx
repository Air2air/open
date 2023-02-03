import { lazy } from "react";

const HomePage = lazy(() => import("pages/Home"));
const VisionPage = lazy(() => import("pages/Vision"));
const AboutPage = lazy(() => import("pages/About"));
const ContactPage = lazy(() => import("pages/Contact"));

export const dataRoutes = [
  {
    id: "Home",
    path: "/",
    section: "Home",
    element: <HomePage />,
  },
  {
    id: "Vision",
    path: "/vision",
    section: "Vision",
    element: <VisionPage />,
  },
  {
    id: "About",
    path: "/about",
    section: "About",
    element: <AboutPage />,
  },
  {
    id: "Contact",
    path: "/contact",
    section: "Contact",
    element: <ContactPage />,
  },
];
