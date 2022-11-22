import AboutPage from "./../pages/about";
import BioTechPage from "./../pages/biotech";
import ContactPage from "./../pages/contact";
import HealthTechPage from "./../pages/healthtech";
import HomePage from "../pages/Home/home";
import MarketsPage from "../pages/Markets/markets";
import MedTechPage from "./../pages/medtech";
import PharmaTechPage from "./../pages/pharmatech";
import ProcessPage from "./../pages/Process/process";
import EngagementPage from "./../pages/Engagement/engagement";
import VisionPage from "./../pages/vision";
import PracticeAreasPage from "../pages/PracticeAreas/practiceAreas";
import CaseStudiesPage from "pages/CaseStudies/caseStudies";


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
