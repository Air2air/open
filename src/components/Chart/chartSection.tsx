import {
  BREAKPOINT,
  CHART_HEIGHT_DESKTOP,
  CHART_HEIGHT_MOBILE,
} from "constants/index";
import styled from "styled-components";

export const ChartSection = styled.div`
  position: relative;
  width: 100%;
  overflow:hidden;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_HEIGHT_MOBILE}px;
  }
  /* background: red; */
`;
