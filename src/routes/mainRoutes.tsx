import AboutPage from "../pages/about";
import BioTechPage from "../pages/biotech-page";
import BioTech from "../pages/biotech-page";
import HealthTechPage from "../pages/healthtech-page";
import HealthTech from "../pages/healthtech-page";
import HomePage from "../pages/home";
import MedTech from "../pages/medtech";
import MedTechPage from "../pages/medtech-page";
import PharmaTech from "../pages/pharmatech";
import PharmaTechPage from "../pages/pharmatech-page";

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
    children: [
      {
        index: true,
        element: <BioTech />,
      },
      {
        path: ":biotechId",
        element: <BioTechPage />,
      },
    ],
  },
  {
    path: "healthtech",
    children: [
      {
        index: true,
        element: <HealthTech />,
      },
      {
        path: ":medtechId",
        element: <HealthTechPage />,
      },
    ],
  },
  {
    path: "medtech",
    children: [
      {
        index: true,
        element: <MedTech />,
      },
      {
        path: ":medtechId",
        element: <MedTechPage />,
      },
    ],
  },
  {
    path: "pharmatech",
    children: [
      {
        index: true,
        element: <PharmaTech />,
      },
      {
        path: ":medtechId",
        element: <PharmaTechPage />,
      },
    ],
  },
];

export default mainRoutes;
