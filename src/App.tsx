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
  flex-direction: column;
  height: auto;
  margin: 0 auto;
  width: 60vw;
  // justify-content: space-around;
`;

export default App;
