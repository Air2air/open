import Container from "components/Container/container";
import styled from "styled-components";
import { TitleCallout as Title } from "components/Title/titleCallout";

const DashboardPage = () => {
  return (
    <>
      <div style={{ height: "100px", width: "100vw" }}></div>

       <Container backgroundColor="">
        <Title title="Client dashboard mockup"></Title>

        <Wireframe>
          <h3>Liquidity Timeline</h3>
          <ul>
            <li>Interactive chart showing the company stage</li>
            <li>Comparable benchmarks</li>
            <li>Valuation range estimates</li>
          </ul>
        </Wireframe>

        <Wireframe>
          <h3>Elevens Milestones Timeline</h3>
          <ul>
            <li>What milestones have been reached</li>
            <li>What remains to be reached</li>
          </ul>
        </Wireframe>

        <Wireframe>
          <h3>Key performance indicators</h3>
          <ul>
            <li>Elevens EIR</li>
            <li>Financial</li>
            <li>Customer acquisition cost</li>
            <li>Cost efficiency of AI usage</li>
            <li>Outliers</li>
          </ul>
        </Wireframe>
      </Container>
    </>
  );
};

const Wireframe = styled.div`
  color: #fff;
  margin: 10px auto;
  padding: 30px;
  border-top: 2px solid #fff;
  height: auto;
  width: 100%;
  box-sizing: border-box;
`;

export default DashboardPage;
