import { useEffect, useState } from "react";
import VideoPlayer from "react-background-video-player";
import styled from "styled-components";

const VideoCallout = ({ pageVideo, overlayOpacity, overlayColor, height }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

//     return _ => {
//       window.removeEventListener('resize', handleResize)
// }

  });

  return (
    <>
      <VideoWrapper style={{ height: height }}>
        <VideoPlayer
          className="video"
          src={pageVideo}
          autoPlay={true}
          muted={true}
          containerWidth={dimensions.width}
        />
      </VideoWrapper>
      <BannerVideoOpacityOverlay
        overlayOpacity={overlayOpacity}
        overlayColor={overlayColor}
        height={height}
      />
    </>
  );
};

const BannerVideoOpacityOverlay = ({
  overlayOpacity,
  overlayColor,
  height,
}) => {
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
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: auto;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default VideoCallout;
