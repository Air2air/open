import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
  CONTENT_WIDTH,
} from "../../styles/Constants";
import styled from "styled-components";

import ImageCallout from "../ImageCallout/imageCallout";
import parse from "html-react-parser";
import { Title } from "../Title/title";
import { BannerText } from "../BannerText/bannerText";

export const BannerImage = ({
  pageTitle,
  pageDescription,
  pageImage,
  overlayOpacity,
  overlayColor,
  typing,
}) => {
  const pageTitleParsed = parse(pageTitle);
  const pageDescriptionParsed = parse(pageDescription);

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
          <Title titleText={pageTitleParsed} />
          <BannerText typing={typing} bannerText={pageDescriptionParsed} />
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
  width: ${CONTENT_WIDTH};
  text-align: left;
`;

export default BannerImage;
