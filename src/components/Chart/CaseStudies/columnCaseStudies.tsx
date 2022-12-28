import {
  animationEnter,
  ChartWrapper,
  ColumnOuter,
  ColumnSeries,
  concatPercent,
} from "../ChartComponents/chartComponents";
import { ColumnLabel } from "../ChartComponents/columnLabel";

const ColumnCaseStudies = (props) => {
  return (
    <ChartWrapper>
      {props.data.map(
        (
          props: {
            id: number;
            height: number;
            backgroundColor: string;
            title: string;
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
                opacity: 0,
              }}
            />
            <ColumnLabel label={props.title} index={index} />
          </ColumnOuter>
        )
      )}
    </ChartWrapper>
  );
};

export default ColumnCaseStudies;
