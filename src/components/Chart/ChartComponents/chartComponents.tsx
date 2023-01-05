import { BREAKPOINT } from "styles/Constants";
import styled from "styled-components";
import { CHART_HEIGHT_DESKTOP, CHART_HEIGHT_MOBILE, CHART_COLUMN_TRANSITION, COLUMN_GRID_GAP_DESKTOP, COLUMN_GRID_GAP_MOBILE, CHART_BAR_HEIGHT_MIN_DESKTOP, CHART_BAR_HEIGHT_MIN_MOBILE, CHART_COLUMN_STAGGER } from "./chartCSS";

export const ChartSection = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    padding: 40px 0;
    height: ${CHART_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 20px 0;
    height: ${CHART_HEIGHT_MOBILE}px;
  }
`;

export const ChartWrapper = styled.div`
  /* position: absolute;
  left: 0; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  transform-origin: 0% 0%;
  transition: all ${CHART_COLUMN_TRANSITION}ms;
  overflow: hidden;
  @media (min-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_DESKTOP}px;
    height: ${CHART_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_MOBILE}px;
    height: ${CHART_HEIGHT_MOBILE}px;
  }
  /* background: red; */
`;

export const ColumnOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    height: 100%;
  }
  /* background: green; */
`;

export const ColumnSeries = styled.div`
  /* transition: all ${CHART_COLUMN_TRANSITION}ms; */
  @media (min-width: ${BREAKPOINT}px) {
    min-height: ${CHART_BAR_HEIGHT_MIN_DESKTOP}px;
    align-items: flex-start;
    width: 100%;
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: ${CHART_BAR_HEIGHT_MIN_MOBILE}px;
    align-items: flex-end;
    width: 100%;
  }
  /* background: gold; */
`;

export const animationEnter = (index: number) =>
  `fadeInUp ${CHART_COLUMN_TRANSITION}ms ease-out ${
    CHART_COLUMN_STAGGER * (index + 1)
  }ms forwards`;

export const animationExit = (index: number) =>
  `fadeOutDown ${CHART_COLUMN_TRANSITION}ms ease-in ${
    CHART_COLUMN_STAGGER * (index + 1)
  }ms forwards`;

export const concatPercent = (height: number) => {
  return height + "%";
};
