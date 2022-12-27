import { ColumnVision } from "./columnVision";
import Container from "components/Container/container";
import { ChartSection } from "../ChartComponents/chartScaffold";

export const LoopEndTime = 14000;

const ChartVision = (props) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ColumnVision data={props.data} />
      </ChartSection>
    </Container>
  );
};

export default ChartVision;
