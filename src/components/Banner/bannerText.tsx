import HeadingHome from "components/Heading/headingHome";
import HeadingMarkets from "components/Heading/headingMarkets";
import HeadingWhatWeDo from "components/Heading/headingWhatWeDo";
import HeadingVision from "components/Heading/headingVision";
import HeadingAbout from "components/Heading/headingAbout";
import HeadingCaseStudies from "components/Heading/headingCaseStudies";
import HeadingContact from "components/Heading/headingContact";
import HeadingHistory from "components/Heading/headingHistory";
import HeadingUnderConstruction from "components/Heading/headingUnderConstruction";
import {
  BREAKPOINT,
} from "styles/Constants";
import styled from "styled-components";
import { BANNER_PADDING_TOP_DESKTOP, BANNER_PADDING_TOP_MOBILE } from "./bannerCSS";
import HeadingError from "components/Heading/headingError";

export const BannerText = (props) => {
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
    } else if (props.text === "whatwedo") {
      return <HeadingWhatWeDo {...props} />;
    } else if (props.text === "underconstruction") {
      return <HeadingUnderConstruction {...props} />;
    } else if (props.text === "vision") {
      return <HeadingVision {...props} />;
    } else if (props.text === "error") {
      return <HeadingError {...props} />;
    } else {
      return <HeadingHome {...props} />;
    }
  };

  return <TextPositioner>{headingText()}</TextPositioner>;
};

const TextPositioner = styled.div`
  position: absolute;
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

export default BannerText;
