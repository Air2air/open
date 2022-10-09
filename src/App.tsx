import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import Graph from "./components/Graph/Graph";
// import NavBubbles from "./components/AmCharts/chart";
import { Header } from "./components/Header";
import mainRoutes from "./routes/mainRoutes";

const App = () => {
  const routeResult = useRoutes(mainRoutes);
  return (
    <>
      <Header />
      <Container>
        <Col>
          <Graph />
        </Col>
        <Col>{routeResult}</Col>
      </Container>
    </>
  );
};

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
  align-items:flex-start;
  justify-content: center;
  //background: blue;
`;

export default App;
