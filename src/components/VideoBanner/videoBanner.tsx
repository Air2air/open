import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BANNER_PADDING_TOP_DESKTOP,
  BANNER_PADDING_TOP_MOBILE,
  BREAKPOINT,
  COLOR_BLACK,
} from "constants/index";
import styled from "styled-components";
import { SubHeading } from "../SubHeading/subHeading";
import { TitleBanner } from "../Title/titleBanner";
import { IBannerVideoProps } from "components/VideoBanner/videos";
import VimeoPlayer from "./vimeoPlayer";

export const BannerVideo = (props: IBannerVideoProps) => {
  return (
    <>
      <BannerVideoWrapper>
        <div className="animate__animated animate__fadeIn animate__delay-0s animate__slower">
          <VimeoPlayer videoID={props.pageVideo} />
        </div>
        <Overlay
          style={{
            opacity: props.overlayOpacity,
            background: props.overlayColor,
          }}
        />
        <TitleBanner title={props.title} color={props.color} />
        <SubHeading typing={props.typing} text={props.text} />
      </BannerVideoWrapper>
    </>
  );
};

const BannerVideoWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  overflow: hidden;
  background: ${COLOR_BLACK};
  @media (min-width: ${BREAKPOINT}px) {
    /* padding-top: ${BANNER_PADDING_TOP_DESKTOP}px; */
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    /* padding-top: ${BANNER_PADDING_TOP_MOBILE}px; */
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
