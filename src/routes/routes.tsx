import AboutPage from "pages/about";
import ContactPage from "pages/contact";
import HomePage from "pages/Home/home";
import MarketsPage from "pages/Markets/markets";
import ProcessPage from "pages/Process/process";
import EngagementPage from "pages/Engagement/engagement";
import VisionPage from "pages/vision";
import PracticeAreasPage from "pages/PracticeAreas/practiceAreas";
import CaseStudiesPage from "pages/CaseStudies/caseStudies";
import DashboardPage from "pages/Dashboard/dashboard";

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
