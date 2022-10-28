import React from "react"
import styled from "styled-components"
import Vimeo from "@u-wave/react-vimeo"

export default function VimeoPlayer({videoID}) {
  return (
    <>
      <VideoContainer>
        <Video
          background={true}
          loop={true}
          responsive
          video={videoID}
          autoplay
          height={800}
        />
      </VideoContainer>
    </>
  )
}

const VideoContainer = styled.div`
  bottom: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`

const Video = styled(props => <Vimeo {...props} />)`
  height: 56.25vw; // for a 16:9 aspect ratio, 9/16*100 = 56.25
  left: 50%;
  min-height: 100vh;
  min-width: 177.77vh; // for a 16:9 aspect ratio, 16/9*100 = 177.77
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
`
