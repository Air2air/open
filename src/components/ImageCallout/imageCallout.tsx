import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
} from "./../../styles/Constants";

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
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
  }
`;

export default ImageCallout;
