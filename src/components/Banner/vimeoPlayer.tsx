import styled from "styled-components";
import Vimeo from "@u-wave/react-vimeo";
import { BREAKPOINT_MID, BREAKPOINT, COLOR_BASE } from "styles/Constants";
import { useState } from "react";
import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  VideoContainer,
} from "./bannerComponents";

export const VimeoPlayer = ({ videoID }) => {
  const [isLoading, setIsLoading] = useState(true);

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
        {isLoading ? "" : null}
      </VideoContainer>
    </>
  );
};

const Video = styled((props) => <Vimeo {...props} />)`
  position: absolute;
  left: 50%;
  min-width: 100vw;
  transition: all 2s;
  background: ${COLOR_BASE};

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
