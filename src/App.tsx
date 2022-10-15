import { Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header/header";
import SlideRoutes from "react-slide-routes";
import { data } from "./data/data";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <SlideRoutes>
          {data.nodes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </SlideRoutes>
      </Container>
    </>
  );
};

/* {routeResult} */

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 0 auto;
  width: 60vw;
  // justify-content: space-around;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10% 0 0 0;
  width: 50%;
  //background:red;
`;

export default App;
