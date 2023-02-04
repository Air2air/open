import HomePage from "pages/Home";
import AboutPage from "pages/About";
import VisionPage from "pages/Vision";
import ContactPage from "pages/Contact";

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
