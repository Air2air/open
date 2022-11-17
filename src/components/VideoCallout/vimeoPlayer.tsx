import styled from "styled-components";
import Vimeo from "@u-wave/react-vimeo";
import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_MID_PX,
  BREAKPOINT_PX,
} from "./../../styles/Constants";

export default function VimeoPlayer({ videoID }) {
  return (
    <>
      <VideoContainer>
        <Video
          background={true}
          loop={true}
          responsive
          video={videoID}
          autoplay={true}
        />
      </VideoContainer>
    </>
  );
}

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
