import ColumnPracticeAreas from "./columnPracticeAreas";
import Container from "components/Container/container";
import { ChartSection } from "../chartSection";

export const LoopEndTime = 12000;

const ChartPracticeAreas = (props) => {
  return (
    <Container backgroundColor={3}>
      <ChartSection>
        <ColumnPracticeAreas data={props.data} />
      </ChartSection>
    </Container>
  );
};

export default ChartPracticeAreas;
