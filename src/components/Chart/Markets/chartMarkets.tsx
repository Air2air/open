import { ColumnMarkets } from "./columnMarkets";
import Container from "components/Container/container";
import { ChartSection } from "../ChartComponents/chartComponents";

export const LoopEndTime = 14000;

const ChartMarkets = (props: {
  backgroundColor: any;
  data: any;
  columnCount?: number;
}) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ColumnMarkets data={props.data} />
      </ChartSection>
    </Container>
  );
};

export default ChartMarkets;
