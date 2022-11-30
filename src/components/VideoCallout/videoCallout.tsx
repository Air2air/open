import VimeoPlayer from "./vimeoPlayer";
import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BREAKPOINT,
} from "styles/Constants";
import { VideoCalloutProps, VideoOverlayProps } from "api/interfaces";

const VideoCallout = (props: VideoCalloutProps) => {
  return (
    <>
      <VideoWrapper>
        <VimeoPlayer
          videoID={props.pageVideo}
        />
      </VideoWrapper>
      <BannerVideoOpacityOverlay
        overlayOpacity={props.overlayOpacity}
        overlayColor={props.overlayColor}
      />
    </>
  );
};

/* */

const BannerVideoOpacityOverlay = (props: VideoOverlayProps) => {
  return (
    <>
      <Overlay
        style={{
          opacity: props.overlayOpacity,
          background: props.overlayColor,
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
  min-width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: ${BANNER_HEIGHT_DESKTOP}px;
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

export default VideoCallout;
