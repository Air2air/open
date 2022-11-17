import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
} from "../../styles/Constants";
import styled from "styled-components";

import ImageCallOut from "../ImageCallOut/imageCallOut";
import parse from "html-react-parser";
import { BannerText } from "../BannerText/bannerText";
import { TitleBanner } from "../Title/titleBanner";
import Container from "../Container/container";

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
          <ImageCallOut
            pageImage={pageImage}
            overlayOpacity={overlayOpacity}
            overlayColor={overlayColor}
          />
        ) : (
          ""
        )}
        <Container>
          <TitleBanner title={pageTitleParsed} />
          <BannerText typing={typing} bannerText={pageDescription} />
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
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
  }
`;



export default BannerImage;
