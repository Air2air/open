import ColumnPracticeAreas from "./columnPracticeAreas";
import Container from "components/Container/container";
import { ChartSection, ChartWrapper } from "../ChartComponents/chartComponents";

const ChartPracticeAreas = (props: {
  backgroundColor: any;
  data: any;
  loopEndTime?: number;
  columnCount?:number
}) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ChartWrapper>
          {props.data.map((props, index: number) => (
            <ColumnPracticeAreas
              key={props.id}
              index={index}
              title={props.title}
              label={props.label}
              value={props.value} 
              backgroundColor={props.backgroundColor}
            />
          ))}
        </ChartWrapper>
      </ChartSection>
    </Container>
  );
};

export default ChartPracticeAreas;


