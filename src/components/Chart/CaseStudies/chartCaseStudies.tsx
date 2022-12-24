import ColumnCaseStudies from "./columnCaseStudies";
import Container from "components/Container/container";
import { ChartSection } from "../chartSection";

export const LoopEndTime = 12000;

const ChartCaseStudies = (props) => {
  return (
    <Container backgroundColor={3}>
      <ChartSection>
        <ColumnCaseStudies data={props.data} />
      </ChartSection>
    </Container>
  );
};

export default ChartCaseStudies;
