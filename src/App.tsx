import { Link, useRoutes } from "react-router-dom";
import styled from "styled-components";
import NavBubbles from "./components/AmCharts/chart";
import { Header } from "./components/Header";
import mainRoutes from "./routes/mainRoutes";

const App = () => {
  const routeResult = useRoutes(mainRoutes);
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
          |<Link to="/">Home</Link> |
      <Link to="/products">Produtos</Link> |<Link to="/medtech">MedTech</Link>
            <NavBubbles />
          </Col>
          <Col>
            <main>{routeResult}</main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: auto;
`;

const Row = styled.div`
  display: flex;
  align-items:center;
  flex: 1;
  height:80vh;
  // background:blue;
`;

const Col = styled.div`
  display: flex;
  flex-direction:column;
  flex: 1;
  height:100%;
  align-items:flex-start;
  justify-content:center;
  //background:blue;
`;

export default App;
