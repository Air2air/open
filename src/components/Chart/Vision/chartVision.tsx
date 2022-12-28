import { ColumnVision } from "./columnVision";
import Container from "components/Container/container";
import { ChartSection } from "../ChartComponents/chartComponents";

export const LoopEndTime = 14000;

const ChartVision = (props: {
  backgroundColor: any;
  data: any;
  loopEndTime?: number;
  columnCount?: number;
}) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ColumnVision data={props.data} />
      </ChartSection>
    </Container>
  );
};

export default ChartVision;
