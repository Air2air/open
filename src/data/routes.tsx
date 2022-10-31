import AboutPage from "../pages/about";
import BioTechPage from "../pages/biotech";
import ContactPage from "../pages/contact";
import HealthTechPage from "../pages/healthtech";
import HomePage from "../pages/home";
import MarketsPage from "../pages/markets";
import MedTechPage from "../pages/medtech";
import PharmaTechPage from "../pages/pharmatech";
import TimeLinePage from "../pages/timeLine";
import VisionPage from "../pages/vision";
import WhatWeDoPage from "../pages/what_we_do";

export const dataRoutes = [
  {
    id: "About",
    path: "about",
    section: "About",
    element: <AboutPage />,
  },
  {
    id: "WhatWeDo",
    path: "what_we_do",
    section: "WhatWeDo",
    element: <WhatWeDoPage />,
  },
  {
    id: "Contact",
    path: "contact",
    section: "Contact",
    element: <ContactPage />,
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
