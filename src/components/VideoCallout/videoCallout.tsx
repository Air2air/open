import VideoPlayer from "react-background-video-player";
import styled from "styled-components";

const VideoCallout = (video) => {
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
    </>  
  );
};
export default VideoCallout;

const VideoWrapper = styled.div`
  height: 500px;
  width: 100%;
`;
