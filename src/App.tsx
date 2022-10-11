import { Route } from "react-router-dom";
import styled from "styled-components";
import { AmChart } from "./components/AmChart/AmChart";
import { Header } from "./components/Header";
import SlideRoutes from "react-slide-routes";

import { data } from "./data/data";

const App = () => {
  return (
    <>
      <Header />
      <Container>
      <Col>
          <AmChart />
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
};

/* {routeResult} */

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  margin: 0 auto;
  width: 80vw;
  justify-content: space-around;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10% 0 0 0;
  width:50%;
  //background:red;
`;

export default App;
