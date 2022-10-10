import AboutPage from "../pages/about";
import BioTechPage from "../pages/BioTech/biotech";
import HealthTechPage from "../pages/HealthTech/healthtech";
import HomePage from "../pages/home";
import MedTechPage from "../pages/MedTech/medtech";
import PharmaTechPage from "../pages/PharmaTech/pharmatech";

const mainRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "biotech",
    element: <BioTechPage />,
  },
  {
    path: ":biotechId",
    element: <BioTechPage />,
  },

  {
    path: "healthtech",
    element: <HealthTechPage />,
  },
  {
    path: ":medtechId",
    element: <HealthTechPage />,
  },

  {
    path: "medtech",
    element: <MedTechPage />,
  },
  {
    path: ":medtechId",
    element: <MedTechPage />,
  },

  {
    path: "pharmatech",
    element: <PharmaTechPage />,
  },
  {
    path: ":medtechId",
    element: <PharmaTechPage />,
  },
];

export default mainRoutes;
