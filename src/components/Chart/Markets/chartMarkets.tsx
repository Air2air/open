import { ColumnMarkets } from "./columnMarkets";
import Container from "components/Container/container";
import { ChartSection } from "../ChartComponents/chartComponents";

export const LoopEndTime = 14000;

const ChartMarkets = (props) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ColumnMarkets data={props.data} />
      </ChartSection>
    </Container>
  );
};

export default ChartMarkets;
