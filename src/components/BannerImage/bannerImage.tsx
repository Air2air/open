import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "../../styles/Constants";
import styled from "styled-components";

import ImageCallout from "../ImageCallout/imageCallout";
import parse from "html-react-parser";
import { BannerText } from "../BannerText/bannerText";
import { TitleBanner } from "../Title/titleBanner";

export const BannerImage = ({
  pageTitle,
  pageDescription,
  pageImage,
  overlayOpacity,
  overlayColor,
  typing,
}) => {
  const pageTitleParsed = parse(pageTitle);


  return (
    <>
      <BannerImageWrapper>
        {pageImage ? (
          <ImageCallout
            pageImage={pageImage}
            overlayOpacity={overlayOpacity}
            overlayColor={overlayColor}
          />
        ) : (
          ""
        )}
        <TextWrapper>
          <TitleBanner titleText={pageTitleParsed} />
          <BannerText typing={typing} bannerText={pageDescription} />
        </TextWrapper>
      </BannerImageWrapper>
    </>
  );
};

const BannerImageWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
  }
`;

const TextWrapper = styled.div`
  margin: 80px auto 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT_PX}) {
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;

export default BannerImage;
