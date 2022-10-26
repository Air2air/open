import VideoPlayer from "react-background-video-player";
import styled from "styled-components";

const VideoCallout = ({ pageVideo, overlayOpacity, overlayColor, height }) => {
  return (
    <>
      <VideoWrapper style={{ height: height }}>
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
        height={height}
      />
    </>
  );
};

const PageBannerOpacityOverlay = ({ overlayOpacity, overlayColor, height }) => {
  return (
    <>
      <Overlay
        style={{
          opacity: overlayOpacity,
          background: overlayColor,
          height: height,
        }}
      />
    </>
  );
};

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default VideoCallout;
