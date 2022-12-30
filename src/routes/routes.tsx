import HistoryPage from "pages/History/pageHistory";
import { lazy } from "react";
const AboutPage = lazy(() => import("pages/About/pageAbout"));
const CaseStudiesPage = lazy(() => import("pages/CaseStudies/pageCaseStudies"));
const ContactPage = lazy(() => import("pages/Contact/pageContact"));
const HomePage = lazy(() => import("pages/Home/pageHome"));
const MarketsPage = lazy(() => import("pages/Markets/pageMarkets"));
const PracticeAreasPage = lazy(
  () => import("pages/PracticeAreas/pagePracticeAreas")
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
