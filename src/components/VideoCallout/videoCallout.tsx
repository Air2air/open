
import VimeoPlayer from "./vimeoPlayer";
import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
} from "../../styles/Constants";

const VideoCallout = ({ pageVideo, overlayOpacity, overlayColor }) => {
  return (
    <>
      <div
        className={`animate__animated animate__fadeIn animate__delay-1s animate__slower `}
      >
        <VideoWrapper>
          <VimeoPlayer videoID={pageVideo} />
        </VideoWrapper>
      </div>
      <BannerVideoOpacityOverlay
        overlayOpacity={overlayOpacity}
        overlayColor={overlayColor}
      />
    </>
  );
};

const BannerVideoOpacityOverlay = ({ overlayOpacity, overlayColor }) => {
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

const VideoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  width: 100vw;
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

export default VideoCallout;
