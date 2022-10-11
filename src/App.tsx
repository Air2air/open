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
              <Route key={path} path={path} element={element} /> 
            ))} 
          </SlideRoutes>
        </Col>
      </Container>
    </>
  );
}

/* {routeResult} */

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  margin: 0 80px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10% 0 0 0;
  //background:red;
`;

export default App;
