import VideoPlayer from "react-background-video-player";
import styled from "styled-components";

const VideoCallout = () => {
  return (
    <>
      <VideoWrapper>
        <VideoPlayer
          className="video"
          src={
            "https://res.cloudinary.com/dv7ollzw5/video/upload/v1619209051/Bloom_Alpha.webm"
          }
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
