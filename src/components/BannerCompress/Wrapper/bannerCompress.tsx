import { StagesColumns } from "../Stages/stagesColumns";
// import { BenefitsColumns } from "../Benefits/benefitsColumns";
import BannerCompressText from "../Text/bannerCompressText";
import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_BASE_3,
  COLOR_CAPTION,
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
import { BenefitsColumns } from "../Benefits/benefitsColumns";
import ButtonCentered from "components/Button/buttonCentered";
import { useState, useEffect } from "react";

const BannerCompress = () => {
  const [buttonOpacity, setButtonOpacity] = useState(0);

  useEffect(() => {
    const buttonReset = setTimeout(() => {
      setButtonOpacity(0);
    }, 0);

    const buttonShow = setTimeout(() => {
      setButtonOpacity(1);
    }, 21000);

    return () => {
      clearTimeout(buttonReset);
      clearTimeout(buttonShow);
    };
  }, []);

  return (
    <BannerCompressWrapper>
      <ContentArea>
        <ChartSection>
          <ChartSectionBackground>
            <StagesColumns />
            <BenefitsColumns />
          </ChartSectionBackground>
          {/* <GraphLegend></GraphLegend> */}
        </ChartSection>
        <ChartBottomSpacer />
        <BannerCompressText />
      </ContentArea>
      <ButtonPositioner style={{opacity: buttonOpacity}}>
        <ButtonCentered buttonTo="/practice_areas" buttonText="What We Do"  />
      </ButtonPositioner>
    </BannerCompressWrapper>
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
  /* background: ${COLOR_BASE_3}; */

  @media (min-width: ${BREAKPOINT}px) {
    height: ${chartHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${chartHeightMobile}px;
  }
  /* background: blue; */
`;

// const GraphLegend = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   font-size: 1.3rem;
//   width: 100%;
//   color: ${COLOR_CAPTION};
//   @media (min-width: ${BREAKPOINT}px) {
//     height: ${chartLegendHeightDesktop}px;
//   }
//   @media (max-width: ${BREAKPOINT}px) {
//     height: ${chartLegendHeightMobile}px;
//   }

//   /* background: green; */
// `;

const BannerCompressWrapper = styled.div`
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

const ButtonPositioner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  z-index: +1;
  @media (min-width: ${BREAKPOINT}px) {
    top: 50%;
  }
  @media (max-width: ${BREAKPOINT}px) {
    top: 63%;
  }
  /* background: blue; */
`;

export default BannerCompress;
