import VideoPlayer from "react-background-video-player";
import styled from "styled-components";
import { BANNER_HEIGHT } from "../../styles/Constants";

const VideoCallout = ({ video, videoOpacity }) => {
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
      <PageBannerOpacityOverlay />
    </>
  );
};
export default VideoCallout;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${BANNER_HEIGHT};
  width: 100%;
`;

const PageBannerOpacityOverlay = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  height: ${BANNER_HEIGHT};
  width: 100vw;
  background-color: rgba(0, 20, 60, .6);
`;
