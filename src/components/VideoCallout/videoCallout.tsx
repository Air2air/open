import VimeoPlayer from "./vimeoPlayer";
import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
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
  @media (min-width: ${BREAKPOINT_PX}) {
    min-height: ${BANNER_HEIGHT_DESKTOP_PX};
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
