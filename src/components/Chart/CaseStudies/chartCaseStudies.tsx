import ColumnCaseStudies from "./columnCaseStudies";
import Container from "components/Container/container";
import { ChartSection } from "../ChartComponents/chartComponents";

const ChartCaseStudies = (props: {
  backgroundColor?: any;
  data: {
    id: number;
    height: number;
    backgroundColor: string;
    title: string;
  }[];
}) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ColumnCaseStudies data={props.data} />
      </ChartSection>
    </Container>
  );
};

export default ChartCaseStudies;
