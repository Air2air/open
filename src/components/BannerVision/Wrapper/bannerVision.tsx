import { StagesColumns } from "../Stages/stagesColumns";
import BannerVisionText from "../Text/bannerVisionText";
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
} from "styles/Constants";
import {
  chartSectionHeightDesktop,
  chartSectionHeightMobile,
  chartHeightDesktop,
  chartHeightMobile,
  // chartLegendHeightDesktop,
  // chartLegendHeightMobile,
  chartSpacerHeightDesktop,
  chartSpacerHeightMobile,
} from "./config";




const BannerVision = () => {

  return (
    <BannerVisionWrapper>
      <ContentArea>
        <ChartSection>
          <ChartSectionBackground>
            <StagesColumns />
            {/* <SavingsColumns />
            <ReductionsColumns /> */}
          </ChartSectionBackground>
        </ChartSection>
        <ChartBottomSpacer />
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
    height: ${chartSectionHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${chartSectionHeightMobile}px;
  }
  /* background: blue; */
`;

const ChartSectionBackground = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  background: ${COLOR_BASE_3};

  @media (min-width: ${BREAKPOINT}px) {
    height: ${chartHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${chartHeightMobile}px;
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
    height: ${chartSpacerHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${chartSpacerHeightMobile}px;
  }
  /* background: red; */
`;

// const ButtonPositioner = styled.div`
//   position: absolute;
//   margin: auto auto;
//   display: flex;
//   justify-self: center;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: auto;
//   /* pointer-events: all; */
//   @media (min-width: ${BREAKPOINT}px) {
//     /* top: 50%; */
//   }
//   @media (max-width: ${BREAKPOINT}px) {
//     /* top: 63%; */
//   }
//   /* background: blue; */
// `;

export default BannerVision;