import VideoPlayer from "react-background-video-player";
import styled from "styled-components";
import { BANNER_HEIGHT_PX } from "../../styles/Constants";

const VideoCallout = ({ pageVideo, overlayOpacity, overlayColor }) => {
  return (
    <>
      <VideoWrapper>
        <VideoPlayer
          className="video"
          src={pageVideo}
          autoPlay={true}
          muted={true}
        />
      </VideoWrapper>
      <PageBannerOpacityOverlay
        overlayOpacity={overlayOpacity}
        overlayColor={overlayColor}
      />
    </>
  );
};

const PageBannerOpacityOverlay = ({ overlayOpacity, overlayColor }) => {
  return (
    <>
      <Overlay style={{ opacity: overlayOpacity, background: overlayColor }} />
    </>
  );
};

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left:0;
  margin: 0 auto;
  height: ${BANNER_HEIGHT_PX};
  width: 100%;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${BANNER_HEIGHT_PX};
  width: 100%;
`;

export default VideoCallout;
