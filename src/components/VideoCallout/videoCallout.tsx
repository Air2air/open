import VideoPlayer from "react-background-video-player";
import styled from "styled-components";
import { BANNER_HEIGHT } from "../../styles/Constants";

const VideoCallout = ({ video, overlayOpacity, overlayColor }) => {
  return (
    <>
      <VideoWrapper>
        <VideoPlayer
          className="video"
          src={video}
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
  left: 0;
  height: ${BANNER_HEIGHT};
  width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${BANNER_HEIGHT};
  width: 100vw;
`;

export default VideoCallout;
