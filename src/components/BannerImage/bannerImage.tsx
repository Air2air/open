import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BREAKPOINT,
  COLOR_BLACK,
} from "constants/index";
import styled from "styled-components";
import ImageCallout from "components/ImageCallout/imageCallout";

export const BannerImage = (props) => {
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
