import { ColumnHome } from "./columnHome";
import Container from "components/Container/container";
import { ChartSection } from "components/Chart/chartComponents";

const ChartHome = (props: {
  backgroundColor: any;
  data: any;
  loopEndTime: any;
  columnCount:number
}) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ColumnHome data={props.data} loopEndTime={props.loopEndTime} />
      </ChartSection>
    </Container>
  );
};

export default ChartHome;
