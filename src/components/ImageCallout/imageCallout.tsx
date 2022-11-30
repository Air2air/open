import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BREAKPOINT,
} from "styles/Constants";

const ImageCallout = ({ pageImage, overlayOpacity, overlayColor }) => {
  const backgroundImage = "url(/images/content/" + pageImage + ")";

  return (
    <>
      <div className="animate__animated animate__fadeIn animate__delay-0s animate__slower">
        <ImageWrapper style={{ backgroundImage: backgroundImage }} />
      </div>
      <BannerImageOpacityOverlay
        overlayOpacity={overlayOpacity}
        overlayColor={overlayColor}
      />
    </>
  );
};

const BannerImageOpacityOverlay = ({ overlayOpacity, overlayColor }) => {
  return (
    <>
      <Overlay
        style={{
          opacity: overlayOpacity,
          background: overlayColor,
        }}
      />
    </>
  );
};

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  overflow: hidden;
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

export default ImageCallout;
