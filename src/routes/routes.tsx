import HistoryPage from "pages/History/history";
import { lazy } from "react";
const AboutPage = lazy(() => import("pages/about"));
const ContactPage = lazy(() => import("pages/contact"));
const HomePage = lazy(() => import("pages/Home/pageHome"));
const MarketsPage = lazy(() => import("pages/Markets/markets"));
const ProcessPage = lazy(() => import("pages/Process/process"));
const EngagementPage = lazy(() => import("pages/Engagement/engagement"));
const VisionPage = lazy(() => import("pages/Vision/pageVision"));
const PracticeAreasPage = lazy(
  () => import("pages/PracticeAreas/practiceAreas")
);
const CaseStudiesPage = lazy(() => import("pages/CaseStudies/caseStudies"));
const DashboardPage = lazy(() => import("pages/Dashboard/dashboard"));

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
    id: "Dashboard",
    path: "dashboard",
    section: "Dashboard",
    element: <DashboardPage />,
  },
  {
    id: "Engagement",
    path: "engagement",
    section: "Engagement",
    element: <EngagementPage />,
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
    id: "Process",
    path: "process",
    section: "Process",
    element: <ProcessPage />,
  },

  {
    id: "Vision",
    path: "vision",
    section: "Vision",
    element: <VisionPage />,
  },
];
