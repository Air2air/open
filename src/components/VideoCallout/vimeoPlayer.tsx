import styled, { keyframes } from "styled-components";
import Vimeo from "@u-wave/react-vimeo";
import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BREAKPOINT_MID,
  BREAKPOINT,
} from "constants/index";
import { useState } from "react";

export const VimeoPlayer = ({ videoID }) => {
  const [isLoading, setIsLoading] = useState(true);

  const backgroundImage = "url(/images/loading-images/" + videoID + ".jpg)";

  return (
    <>
      <VideoContainer>
        <Video
          video={videoID}
          autoplay
          background
          loop
          muted
          responsive
          onPlaying={() => setIsLoading(false)}
        />
        {isLoading ? (
          <LoadingImage style={{ backgroundImage: backgroundImage }} />
        ) : null}
      </VideoContainer>
    </>
  );
};

const fadeOutKeyframe = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const LoadingImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  width: 100vw;
  animation: ${fadeOutKeyframe} 1s 2s;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT_MID}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-width: 100vw;
  object-fit: cover;
  object-position: center;
  z-index: -1;

  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT_MID}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

const Video = styled((props) => <Vimeo {...props} />)`
  position: absolute;
  left: 50%;
  min-width: 100vw;
  transition: all 2s;
  @media (min-width: ${BREAKPOINT}px) {
    top: -50%;
    transform: translate(-50%, 50%);
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (min-width: ${BREAKPOINT}px) and (max-width: ${BREAKPOINT_MID}px) {
    min-width: 1100px;
    top: -50%;
    transform: translate(-50%, 50%);
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-width: 900px;
    top: -50%;
    transform: translate(-50%, 50%);
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

export default VimeoPlayer;
