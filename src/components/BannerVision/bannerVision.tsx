import { VisionColumns } from "./columns";
import BannerVisionText from "./text";
import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_BASE_3,
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BANNER_PADDING_TOP_DESKTOP,
  BANNER_CONTENT_HEIGHT_DESKTOP,
  CONTENT_WIDTH_DESKTOP,
  BANNER_PADDING_TOP_MOBILE,
  BANNER_CONTENT_HEIGHT_MOBILE,
  CONTENT_WIDTH_MOBILE,
  CHART_SECTION_HEIGHT_DESKTOP,
  CHART_SECTION_HEIGHT_MOBILE,
  CHART_HEIGHT_DESKTOP,
  CHART_HEIGHT_MOBILE,
  CHART_SPACER_HEIGHT_DESKTOP,
  CHART_SPACER_HEIGHT_MOBILE,
} from "constants/index";

export const LoopEndTime = 12000;

const BannerVision = () => {
  return (
    <BannerVisionWrapper>
      <ContentArea>
        <ChartSection>
          <ChartSectionBackground>
            <VisionColumns />
          </ChartSectionBackground>
        </ChartSection>
        <BannerVisionText />
      </ContentArea>
    </BannerVisionWrapper>
  );
};

const ChartSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_SECTION_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_SECTION_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
`;

const ChartSectionBackground = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  /* background: ${COLOR_BASE_3}; */

  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
`;

const BannerVisionWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

const ContentArea = styled.div`
  position: relative;
  z-index: +1;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    top: ${BANNER_PADDING_TOP_DESKTOP}px;
    height: ${BANNER_CONTENT_HEIGHT_DESKTOP}px;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    top: ${BANNER_PADDING_TOP_MOBILE}px;
    height: ${BANNER_CONTENT_HEIGHT_MOBILE}px;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: gold; */
`;

const ChartBottomSpacer = styled.div`
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_SPACER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_SPACER_HEIGHT_MOBILE}px;
  }
  /* background: red; */
`;

export default BannerVision;
