import ColumnCaseStudies from "./columnCaseStudies";
import Container from "components/Container/container";
import { ChartSection } from "../ChartComponents/chartComponents";

const ChartCaseStudies = (props) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ColumnCaseStudies {...props} />
      </ChartSection>
    </Container>
  );
};

export default ChartCaseStudies;
