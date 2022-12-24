import HistoryPage from "pages/History/history";
import { lazy } from "react";
const AboutPage = lazy(() => import("pages/About/about"));
const CaseStudiesPage = lazy(() => import("pages/CaseStudies/caseStudies"));
const ContactPage = lazy(() => import("pages/Contact/contact"));
const HomePage = lazy(() => import("pages/Home/pageHome"));
const MarketsPage = lazy(() => import("pages/Markets/markets"));
const PracticeAreasPage = lazy(
  () => import("pages/PracticeAreas/practiceAreas")
);
const VisionPage = lazy(() => import("pages/Vision/pageVision"));

export const dataRoutes = [
  {
    id: "About",
    path: "about",
    section: "About",
    element: <AboutPage />,
  },
  {
    id: "CaseStudies",
    path: "casestudies",
    section: "Case Studies",
    element: <CaseStudiesPage />,
  },
  {
    id: "Contact",
    path: "contact",
    section: "Contact",
    element: <ContactPage />,
  },

  {
    id: "History",
    path: "history",
    section: "History",
    element: <HistoryPage />,
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
    id: "Markets",
    path: "markets",
    section: "Markets",
    element: <MarketsPage />,
  },
  {
    id: "PracticeAreas",
    path: "practice_areas",
    section: "PracticeAreas",
    element: <PracticeAreasPage />,
  },

  {
    id: "Vision",
    path: "vision",
    section: "Vision",
    element: <VisionPage />,
  },
];
