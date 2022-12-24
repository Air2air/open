import { HomeColumns } from "./columnHome";
import Container from "components/Container/container";
import { ChartSection } from "../chartSection";

export const LoopEndTime = 14000;

const ChartHome = (props: { backgroundColor: any }) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <HomeColumns />
      </ChartSection>
    </Container>
  );
};



export default ChartHome;
