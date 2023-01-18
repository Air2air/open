import { lazy } from "react";
const AboutPage = lazy(() => import("pages/About"));
const PolicyPage = lazy(() => import("pages/Policy"));
const ContactPage = lazy(() => import("pages/Contact"));
const CharterPage = lazy(() => import("pages/Charter"));
const HomePage = lazy(() => import("pages/Home"));
const ResearchPage = lazy(() => import("pages/Research"));
const GetInvolvedPage = lazy(() => import("pages/GetInvolved"));
const EducationPage = lazy(() => import("pages/Education"));

export const dataRoutes = [
  {
    id: "About",
    path: "about",
    section: "About",
    element: <AboutPage />,
  },

  {
    id: "Policy",
    path: "policy",
    section: "Policy",
    element: <PolicyPage />,
  },
  {
    id: "Contact",
    path: "contact",
    section: "Contact",
    element: <ContactPage />,
  },

  {
    id: "Charter",
    path: "charter",
    section: "Charter",
    element: <CharterPage />,
  },
  {
    id: "Home",
    path: "/",
    section: "Home",
    element: <HomePage />,
  },
  {
    id: "Home2",
    path: "home",
    section: "Home",
    element: <HomePage />,
  },
  {
    id: "Research",
    path: "research",
    section: "Research",
    element: <ResearchPage />,

  },
  {
    id: "GetInvolved",
    path: "getinvolved",
    section: "GetInvolved",
    element: <GetInvolvedPage />,
  },
  {
    id: "Education",
    path: "education",
    section: "Education",
    element: <EducationPage />,
  },
];
