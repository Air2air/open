import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BREAKPOINT,
  COLOR_BLACK,
} from "constants/index";
import styled from "styled-components";
import VimeoPlayer from "./vimeoPlayer";

export const BannerVideo = (props: {
  pageVideo: any;
  overlayOpacity: any;
  overlayColor?: any;
  typing?: boolean;
  loopEndTime?: number;
}) => {
  return (
    <>
      <BannerVideoWrapper>
        <VimeoPlayer videoID={props.pageVideo} />
        <Overlay
          style={{
            opacity: props.overlayOpacity,
            background: props.overlayColor,
          }}
        />
      </BannerVideoWrapper>
    </>
  );
};

const BannerVideoWrapper = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  overflow: hidden;
  background: ${COLOR_BLACK};
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

export default BannerVideo;
