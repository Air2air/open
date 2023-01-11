import { BREAKPOINT, COLOR_CAPTION } from "styles/Constants";
import styled from "styled-components";
import Container from "components/Container/container";

// Charts
export const CHART_LABEL_DESKTOP = "1.2em";
export const CHART_LABEL_MOBILE = "1em";
export const COLUMN_GRID_GAP_DESKTOP = 10;
export const COLUMN_GRID_GAP_MOBILE = 7;

/* Chart Height */
export const CHART_HEIGHT_DESKTOP = 150;
export const CHART_HEIGHT_MOBILE = 110;
export const CHART_SECTION_HEIGHT_DESKTOP = CHART_HEIGHT_DESKTOP * 0.8;
export const CHART_SECTION_HEIGHT_MOBILE = CHART_HEIGHT_MOBILE * 0.8;

// Transitions
export const CHART_COLUMN_TRANSITION = 400;
export const CHART_COLUMN_STAGGER = 100;
export const CHART_TEXT_TRANSITION = 400;

// Bar min height
export const CHART_BAR_HEIGHT_MIN_DESKTOP = 30;
export const CHART_BAR_HEIGHT_MIN_MOBILE = 30;

export const ChartSection = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    padding: 40px 0;
    height: ${CHART_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 20px 0;
    height: ${CHART_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
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
`;

export const BarOuter = styled.div`
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

export const BarInner = styled.div`
  opacity: 0;
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

export const animationEnter = (index: number | undefined) =>
  `fadeInUp ${CHART_COLUMN_TRANSITION}ms ease-out ${
    CHART_COLUMN_STAGGER * (index ? index + 1 : 0)
  }ms forwards`;

export const animationExit = (index: number | undefined) =>
  `fadeOutDown ${CHART_COLUMN_TRANSITION}ms ease-in ${
    CHART_COLUMN_STAGGER * (index ? index + 1 : 0)
  }ms forwards`;

export const concatPercent = (height: number | undefined) => {
  return `${height === 0 ? 0 : height}%`;
};

export const GraphLegend = styled.div`
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

export const ChartSkeleton = () => (
  <Container backgroundColor={1}>
    <ChartSection>
      <ChartWrapper></ChartWrapper>
    </ChartSection>
  </Container>
) as JSX.Element;
