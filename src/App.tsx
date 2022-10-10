import { Route } from "react-router-dom";
import styled from "styled-components";
import Graph from "./components/Graph/Graph";
import { Header } from "./components/Header";
import SlideRoutes from "react-slide-routes";

import {data} from "./data/data"


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
             {data.nodes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} /> // Type '() => JSX.Element' is not assignable to type 'ReactNode'.
            ))} 

            {/* <Route path="/" element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="biotech" element={<BioTechPage />} />
            <Route path="healthtech" element={<HealthTechPage />} />
            <Route path="medtech" element={<MedTechPage />} />
            <Route path="pharmatech" element={<PharmaTechPage />} /> */}
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
  margin: 0 80px;
  //background:red;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10% 0 0 0;
`;

export default App;
