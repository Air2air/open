import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BANNER_PADDING_TOP_DESKTOP,
  BANNER_PADDING_TOP_MOBILE,
  BREAKPOINT_PX,
} from "styles/Constants";
import styled from "styled-components";

import ImageCallout from "./../ImageCallout/imageCallout";
import parse from "html-react-parser";
import { BannerText } from "./../BannerText/bannerText";
import { TitleBanner } from "./../Title/titleBanner";
import Container from "./../Container/container";

export const BannerImage = ({
  title,
  text,
  pageImage,
  overlayOpacity,
  overlayColor,
  typing,
}) => {
  const titleParsed = parse(title);

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
        <Container>
          <TitleBanner title={titleParsed} />
          <BannerText typing={typing} text={text} />
        </Container>
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
    padding-top: ${BANNER_PADDING_TOP_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
    padding-top: ${BANNER_PADDING_TOP_MOBILE};
  }
  /* background: gold; */
`;





export default BannerImage;
