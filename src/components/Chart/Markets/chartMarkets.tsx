import { MarketsColumns } from "./columnMarkets";
import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
  CHART_SECTION_HEIGHT_DESKTOP,
  CHART_SECTION_HEIGHT_MOBILE,
  COLOR_CAPTION,
} from "constants/index";
import Container from "components/Container/container";

export const LoopEndTime = 14000;

const ChartMarkets = (props: { backgroundColor: any }) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <MarketsColumns />
        <GraphLegend>
          <div>$1.2T</div>
          <div>$800B</div>
          <div>$400B</div>
          <div style={{ height: 10 }}>&nbsp;</div>
        </GraphLegend>
      </ChartSection>
    </Container>
  );
};

// const ChartSection = styled.div`
//   position: relative;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   @media (min-width: ${BREAKPOINT}px) {
//     height: ${CHART_HEIGHT_DESKTOP}px;
//   }
//   @media (max-width: ${BREAKPOINT}px) {
//     height: ${CHART_HEIGHT_MOBILE}px;
//   }
// `;

const ChartSection = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_SECTION_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_SECTION_HEIGHT_MOBILE}px;
  }
  background: blue;
`;

const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: "100%";
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

export default ChartMarkets;
