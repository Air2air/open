import ColumnPracticeAreas from "./columnPracticeAreas";
import Container from "components/Container/container";
import { ChartSection, ChartWrapper } from "../ChartComponents/chartScaffold";

const ChartPracticeAreas = (props) => {
  return (
    <Container>
      <ChartSection>
        <ChartWrapper>
          {props.data.map((props) => (
            <ColumnPracticeAreas
              key={props.id}
              index={props.index}
              backgroundColor={props.backgroundColor}
              title={props.title}
            />
          ))}
        </ChartWrapper>
      </ChartSection>
    </Container>
  );
};





export default ChartPracticeAreas;
