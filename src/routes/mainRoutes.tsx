import AboutPage from "../pages/about";
import BioTechPage from "../pages/biotech";
import HealthTechPage from "../pages/healthtech";
import HomePage from "../pages/home";
import MedTechPage from "../pages/medtech";
import PharmaTechPage from "../pages/pharmatech";

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
        element: <BioTechPage />,
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
        element: <HealthTechPage />,
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
        element: <MedTechPage />,
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
        element: <PharmaTechPage />,
      },
      {
        path: ":medtechId",
        element: <PharmaTechPage />,
      },
    ],
  },
];

export default mainRoutes;
