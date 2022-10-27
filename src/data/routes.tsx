import AboutPage from "../pages/about";
import ApproachPage from "../pages/approach";
import BioTechPage from "../pages/biotech";
import ContactPage from "../pages/contact";
import ContactSuccessPage from "../pages/contactSuccess";
import HealthTechPage from "../pages/healthtech";
import HomePage from "../pages/home";
import MarketsPage from "../pages/markets";
import MedTechPage from "../pages/medtech";
import PharmaTechPage from "../pages/pharmatech";
import TimeLinePage from "../pages/timeLine";
import VisionPage from "../pages/vision";


export const dataRoutes = [
  {
    id: "About",
    path: "about",
    section: "About",
    element: <AboutPage />,
  },
  {
    id: "Approach",
    path: "approach",
    section: "Approach",
    element: <ApproachPage />,
  },
  {
    id: "Contact",
    path: "contact",
    section: "Contact",
    element: <ContactPage />,
  },
  {
    id: "ContactSuccess",
    path: "contactSuccess",
    section: "ContactSuccess",
    element: <ContactSuccessPage />,
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
    id: "TimeLine",
    path: "timeline",
    section: "TimeLine",
    element: <TimeLinePage />,
  },
  {
    id: "Vision",
    path: "vision",
    section: "Vision",
    element: <VisionPage />,
  },

  {
    id: "Biotech",
    path: "biotech",
    section: "Biotech",
    element: <BioTechPage />,
  },
  {
    id: "Healthtech",
    path: "healthtech",
    section: "Healthtech",
    element: <HealthTechPage />,
  },
  {
    id: "Medtech",
    path: "medtech",
    section: "Medtech",
    element: <MedTechPage />,
  },
  {
    id: "Pharmatech",
    path: "Pharmatech",
    section: "Pharmatech",
    element: <PharmaTechPage />,
  },
];
