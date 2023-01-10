import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_CAPTION,
} from "styles/Constants";
import {
  animationEnter,
  ChartWrapper,
  BarOuter,
  BarInner,
  concatPercent,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
} from "components/Callout/Chart/chartComponents";
import { BarLabel } from "components/Callout/Chart/barLabel";

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
          <BarOuter key={index}>
            <BarInner
              key={props.id}
              style={{
                height: concatPercent(props.height),
                backgroundColor: props.backgroundColor,
                animation: animationEnter(index),
                opacity: 0,
              }}
            />
            <BarLabel label={props.label} index={index} />
          </BarOuter>
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
