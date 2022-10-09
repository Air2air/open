import { Route } from "react-router-dom";
import styled from "styled-components";
import Graph from "./components/Graph/Graph";
import { Header } from "./components/Header";
import mainRoutes from "./routes/mainRoutes";
import SlideRoutes from "react-slide-routes";
import AboutPage from "./pages/about";
import BioTechPage from "./pages/biotech-page";
import BioTech from "./pages/biotech-page";
import HealthTechPage from "./pages/healthtech-page";
import HealthTech from "./pages/healthtech-page";
import HomePage from "./pages/home";
import MedTech from "./pages/medtech";
import MedTechPage from "./pages/medtech-page";
import PharmaTech from "./pages/pharmatech";
import PharmaTechPage from "./pages/pharmatech-page";

const App = () => {

  return (
    <>
      <Header />
      <Container>
        <Col>
          <Graph />
        </Col>
        <Col>
          <SlideRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="medtech" element={<MedTechPage />} />
          </SlideRoutes>
        </Col>
      </Container>
    </>
  );
};

/* {routeResult} */

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  align-items: flex-start;
  justify-content: center;
  //background: blue;
`;

export default App;
