import { useEffect, useState } from "react";
// import VideoPlayer from "react-background-video-player";
import VimeoPlayer from "./vimeoPlayer"
import styled from "styled-components";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const VideoCallout = ({ pageVideo, overlayOpacity, overlayColor, height }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="animate__animated animate__fadeIn animate__delay-0s animate__slower">
        <VideoWrapper style={{ height: height}} >
          <VimeoPlayer videoID={pageVideo}/>
        </VideoWrapper>
      </div>
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
