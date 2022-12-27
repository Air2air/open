import { ColumnHome } from "./columnHome";
import Container from "components/Container/container";
import { ChartSection } from "../ChartComponents/chartScaffold";

const ChartHome = (props) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ColumnHome data={props.data} loopEndTime={props.loopEndTime} />
      </ChartSection>
    </Container>
  );
};

export default ChartHome;
