import {
  animationEnter,
  ChartWrapper,
  ColumnOuter,
  ColumnSeries,
  concatPercent,
} from "../ChartComponents/chartComponents";
import { ColumnLabel } from "../ChartComponents/columnLabel";

const ColumnCaseStudies = (props: {
  data: {
    id: number;
    title: string;
    label: string;
    height: number;
    backgroundColor: string;
  }[];
}) => {
  return (
    <ChartWrapper>
      {props.data.map(
        (
          props: {
            id: number;
            title: string;
            label: string;
            height: number;
            backgroundColor: string;
          },
          index: number
        ) => (
          <ColumnOuter key={index}>
            <ColumnSeries
              key={props.id}
              style={{
                height: concatPercent(props.height),
                backgroundColor: props.backgroundColor,
                animation: animationEnter(index),
              }}
            />
            <ColumnLabel
              label={props.label}
              index={index}
            />
          </ColumnOuter>
        )
      )}
    </ChartWrapper>
  );
};

export default ColumnCaseStudies;
