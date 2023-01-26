import AboutPage from "pages/About";
import CharterPage from "pages/Charter";
import ConnectPage from "pages/Connect";
import ContactPage from "pages/Contact";
import EducationPage from "pages/Education";
import PolicyPage from "pages/Policy";
import ResearchPage from "pages/Research";
import { lazy } from "react";

const HomePage = lazy(() => import("pages/Home"));

export const dataRoutes = [
  {
    id: "Home",
    path: "/",
    section: "Home",
    element: <HomePage />,
  },
  {
    id: "Connect",
    path: "/connect",
    section: "Connect",
    element: <ConnectPage />,
  },
  {
    id: "Research",
    path: "/research",
    section: "Research",
    element: <ResearchPage />,
  },
  {
    id: "Policy",
    path: "/policy",
    section: "Policy",
    element: <PolicyPage />,
  },
  {
    id: "Education",
    path: "/education",
    section: "Education",
    element: <EducationPage />,
  },
  {
    id: "Charter",
    path: "/charter",
    section: "Charter",
    element: <CharterPage />,
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
