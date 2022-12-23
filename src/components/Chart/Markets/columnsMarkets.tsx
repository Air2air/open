// import { IColumnMarketsProps } from "interfaces/callouts";
import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_COLUMN_TRANSITION,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
  COLOR_WHITE,
} from "constants/index";

const ColumnMarkets = (props) => {
  return (
    <>
      <ColumnOuter>
        <Column
          style={{
            height: props.height + "%",
            backgroundColor: props.backgroundColor,
          }}
        >
          <Label
          >
            {props.label}
          </Label>
        </Column>
      </ColumnOuter>
    </>
  );
};

const barMinHeightDesktop = 30;
const barMinHeightMobile = 10;

const ColumnOuter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex: 1;
  height: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    margin: 0 10px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    margin: 0 5px;
  }
  /* background: blue; */
`;

const Column = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  transition: all ${CHART_COLUMN_TRANSITION}ms;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: ${barMinHeightDesktop}px;
    align-items: flex-start;
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: ${barMinHeightMobile}px;
    align-items: flex-end;
  }
  /* background: gold; */
`;

const Label = styled.div`
  min-width: 100px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color:${COLOR_WHITE};
  transition: all ${CHART_COLUMN_TRANSITION}ms;
  @media (min-width: ${BREAKPOINT}px) {
    font-size: ${CHART_LABEL_DESKTOP};
    text-align: center;
    padding-top: 10px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    transform: translate(0, -260%) rotate(90deg);
    transform-origin: 50%;
    /* writing-mode: vertical-rl; */
    font-size: ${CHART_LABEL_MOBILE};
  }
  /* background: green; */
`;

export default ColumnMarkets;
