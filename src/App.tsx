import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { data } from "./data/data";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          {data.nodes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Container>
      <Footer />
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
