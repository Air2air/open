import ColumnPracticeAreas from "./columnPracticeAreas";
import Container from "components/Container/container";
import { ChartSection, ChartWrapper } from "../ChartComponents/chartComponents";

const ChartPracticeAreas = (props) => {
  return (
    <Container>
      <ChartSection>
        <ChartWrapper>
          {props.data.map((props, index: number) => (
            <ColumnPracticeAreas
              key={props.id}
              index={index}
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
