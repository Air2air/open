import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BANNER_PADDING_TOP_DESKTOP,
  BANNER_PADDING_TOP_MOBILE,
  BREAKPOINT,
  COLOR_BLACK,
} from "constants/index";
import styled from "styled-components";
import VimeoPlayer from "./vimeoPlayer";
import HeadingHome from "components/Heading/headingHome";
import HeadingMarkets from "components/Heading/headingMarkets";
import HeadingPracticeAreas from "components/Heading/headingPracticeAreas";
import HeadingVision from "components/Heading/headingVision";
import HeadingAbout from "components/Heading/headingAbout";
import HeadingCaseStudies from "components/Heading/headingCaseStudies";
import HeadingContact from "components/Heading/headingContact";
import HeadingHistory from "components/Heading/headingHistory";
import HeadingUnderConstruction from "components/Heading/headingUnderConstruction";

export const BannerVideo = (props) => {
  const headingText = () => {
    if (props.text === "home") {
      return <HeadingHome {...props} />;
    } else if (props.text === "about") {
      return <HeadingAbout {...props} />;
    } else if (props.text === "casestudies") {
      return <HeadingCaseStudies {...props} />;
    } else if (props.text === "contact") {
      return <HeadingContact {...props} />;
    } else if (props.text === "history") {
      return <HeadingHistory {...props} />;
    } else if (props.text === "markets") {
      return <HeadingMarkets {...props} />;
    } else if (props.text === "practiceareas") {
      return <HeadingPracticeAreas {...props} />;
    } else if (props.text === "underconstruction") {
      return <HeadingUnderConstruction {...props} />;
    } else if (props.text === "vision") {
      return <HeadingVision {...props} />;
    } else {
      return <HeadingHome {...props} />;
    }
  };

  return (
    <>
      <BannerVideoWrapper>
        {/* <BannerBackground /> */}
        <BannerContent>
          <VimeoPlayer videoID={props.pageVideo} />
          <Overlay
            style={{
              opacity: props.overlayOpacity,
              background: props.overlayColor,
            }}
          />
          <TextPositioner>{headingText()}</TextPositioner>
        </BannerContent>
      </BannerVideoWrapper>
    </>
  );
};

const BannerVideoWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  overflow: hidden;
  background: ${COLOR_BLACK};
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

// const BannerBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   @media (min-width: ${BREAKPOINT}px) {
//     height: ${BANNER_HEIGHT_DESKTOP}px;
//   }
//   @media (max-width: ${BREAKPOINT}px) {
//     height: ${BANNER_HEIGHT_MOBILE}px;
//   }
// `;

const BannerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

const TextPositioner = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    top: ${BANNER_PADDING_TOP_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    top: ${BANNER_PADDING_TOP_MOBILE}px;
  }
  /* background: red; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

export default BannerVideo;
