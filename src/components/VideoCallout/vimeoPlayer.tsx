import styled from "styled-components";
import Vimeo from "@u-wave/react-vimeo";
import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_MID_PX,
  BREAKPOINT_PX,
} from "styles/Constants";
import { useState } from "react";

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
          onPlay={() => setIsLoading(false)}
        />
        {isLoading && <Loading loadingImage={videoID} />}
      </VideoContainer>
    </>
  );
};

const Loading = ({ loadingImage }) => {
  const backgroundImage = "url(/images/loading-images/" + loadingImage + ".jpg)";

  return (
    <LoadingImage
      className="bgImage"
      style={{ backgroundImage: backgroundImage }}
    />
  );
};

const LoadingImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-width: 100vw;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_MID_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
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
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_MID_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
  }
`;

const Video = styled((props) => <Vimeo {...props} />)`
  left: 50%;
  min-width: 100vw;
  position: absolute;
  @media (min-width: ${BREAKPOINT_PX}) {
    top: -50%;
    transform: translate(-50%, 50%);
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (min-width: ${BREAKPOINT_PX}) and (max-width: ${BREAKPOINT_MID_PX}) {
    min-width: 1100px;
    top: -50%;
    transform: translate(-50%, 50%);
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    min-width: 900px;
    top: -50%;
    transform: translate(-50%, 50%);
    height: ${BANNER_HEIGHT_MOBILE_PX};
  }
`;

export default VimeoPlayer;