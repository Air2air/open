import AboutPage from "../pages/about";
import ApproachPage from "../pages/approach";
import HomePage from "../pages/home";
import TeamPage from "../pages/team";

export const dataRoutes = {
  nodes: [
    {
      id: "Approach",
      path: "approach",
      section: "Elevens",
      element: (
        <ApproachPage  />
      ),
    },
    {
      id: "Home",
      path: "/",
      section: "Elevens",
      element: (
        <HomePage />
      ),
    },
    {
      id: "Home2",
      path: "home",
      section: "Elevens",
      element: (
        <HomePage />
      ),
    },
    {
      id: "Elevens Team",
      path: "team",
      section: "Elevens",
      element: (
        <TeamPage />
      ),
    },
  ],
};
