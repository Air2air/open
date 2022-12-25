import ColumnPracticeAreas from "./columnPracticeAreas";
import Container from "components/Container/container";
import { ChartSection } from "../chartSection";
import styled from "styled-components";

const ChartPracticeAreas = (props) => {
  return (
    <Container backgroundColor={3}>
      <ChartSection>
        <ChartWrapper>
          {props.data.map((props: any) => {
            return <ColumnPracticeAreas {...props} />;
          })}
        </ChartWrapper>
      </ChartSection>
    </Container>
  );
};

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow: hidden;
  height: 100%;
  overflow: hidden;
  /* background: blue; */
`;

export default ChartPracticeAreas;
