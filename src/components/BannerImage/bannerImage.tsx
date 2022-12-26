import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BREAKPOINT,
  COLOR_BLACK,
} from "constants/index";
import styled from "styled-components";
import HeadingHome from "components/Heading/headingHome";
import HeadingMarkets from "components/Heading/headingMarkets";
import HeadingPracticeAreas from "components/Heading/headingPracticeAreas";
import HeadingVision from "components/Heading/headingVision";
import HeadingAbout from "components/Heading/headingAbout";
import HeadingCaseStudies from "components/Heading/headingCaseStudies";
import HeadingContact from "components/Heading/headingContact";
import HeadingHistory from "components/Heading/headingHistory";
import ImageCallout from "components/ImageCallout/imageCallout";

export const BannerImage = (props) => {
  const headingText = () => {
    if (props.text === "home") {
      return <HeadingHome />;
    } else if (props.text === "about") {
      return <HeadingAbout />;
    } else if (props.text === "casestudies") {
      return <HeadingCaseStudies />;
    } else if (props.text === "contact") {
      return <HeadingContact />;
    } else if (props.text === "history") {
      return <HeadingHistory />;
    } else if (props.text === "markets") {
      return <HeadingMarkets />;
    } else if (props.text === "practiceareas") {
      return <HeadingPracticeAreas />;
    } else if (props.text === "vision") {
      return <HeadingVision />;
    } else {
      return <HeadingHome />;
    }
  };

  return (
    <>
      <BannerImageWrapper className="animate__animated animate__fadeIn animate__delay-0s animate__slower">
        {props.pageImage ? <ImageCallout {...props} /> : ""}

        <Overlay
          style={{
            opacity: props.overlayOpacity,
            background: props.overlayColor,
          }}
        />
        {headingText()}
      </BannerImageWrapper>
    </>
  );
};

const BannerImageWrapper = styled.div`
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

export default BannerImage;

//
