import  ColumnCaseStudies  from "./columnCaseStudies";
import Container from "components/Container/container";
import { ChartSection } from "../chartSection";

export const LoopEndTime = 12000;

const ChartCaseStudies = (props: { backgroundColor: any; }) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ColumnCaseStudies />
      </ChartSection>
    </Container>
  );
};


export default ChartCaseStudies;
