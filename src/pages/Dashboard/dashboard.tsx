import Container from "components/Container/container";
import styled from "styled-components";

const DashboardPage = () => {
  return (
    <>
      <div style={{ height: "100px", width: "100vw" }}></div>
      <Container>
        <Wireframe>
          <h3>Timeline to liquidity</h3>
          <ul>
            <li>Interactive chart showing the company stage</li>
            <li>Comparable benchmarks</li>
            <li>Valuation range estimates</li>
          </ul>
        </Wireframe>


        <Wireframe>
          <h3>Milestones</h3>
          <ul>
            <li>What has been reached</li>
            <li>What remains to be reached</li>
          </ul>
        </Wireframe>


        <Wireframe>
          <h3>Key performance indicators</h3>
          <ul>
            <li>Financial</li>
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
  border: 1px solid #fff;
  height: auto;
  width: 100%;
  box-sizing: border-box;
`;

export default DashboardPage;
