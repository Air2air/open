import { ColumnVision } from "./columnVision";
import Container from "components/Container/container";
import { ChartSection } from "../chartSection";

export const LoopEndTime = 12000;

const ChartVision = (props: { backgroundColor: any; }) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ColumnVision />
      </ChartSection>
    </Container>
  );
};


export default ChartVision;
