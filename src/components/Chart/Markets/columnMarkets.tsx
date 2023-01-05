import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_CAPTION,
} from "styles/Constants";
import {
  animationEnter,
  ChartWrapper,
  ColumnOuter,
  ColumnSeries,
  concatPercent,
} from "../ChartComponents/chartComponents";
import { CHART_LABEL_DESKTOP, CHART_LABEL_MOBILE } from "../ChartComponents/chartCSS";
import { ColumnLabel } from "../ChartComponents/columnLabel";

export const ColumnMarkets = (props: any) => {
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
                opacity: 0,
              }}
            />
            <ColumnLabel label={props.label} index={index} />
          </ColumnOuter>
        )
      )}
      <GraphLegend>
        <div>$1.2T</div>
        <div>$800B</div>
        <div>$400B</div>
        <div style={{ height: 10 }}>&nbsp;</div>
      </GraphLegend>
    </ChartWrapper>
  );
};

const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: "100%";
  /* align-self: flex-end; */
  font-size: ${CHART_LABEL_DESKTOP};
  color: ${COLOR_CAPTION};
  @media (min-width: ${BREAKPOINT}px) {
    font-size: ${CHART_LABEL_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: ${CHART_LABEL_MOBILE};
  }
  /* background: green;  */
`;
