import { VisionColumns } from "./columnsVision";
import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_HEIGHT_DESKTOP,
  CHART_HEIGHT_MOBILE,
} from "constants/index";
import Container from "components/Container/container";

export const LoopEndTime = 12000;

const ChartVision = (props: { backgroundColor: any; }) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <VisionColumns />
      </ChartSection>
    </Container>
  );
};

const ChartSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_HEIGHT_MOBILE}px;
  }
`;

export default ChartVision;
