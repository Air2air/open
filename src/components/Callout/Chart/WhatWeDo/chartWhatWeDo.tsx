import ColumnWhatWeDo from "./columnWhatWeDo";
import Container from "components/Container/container";
import { ChartSection, ChartWrapper } from "components/Callout/Chart/chartComponents";

const ChartWhatWeDo = (props: {
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
            <ColumnWhatWeDo
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

export default ChartWhatWeDo;


