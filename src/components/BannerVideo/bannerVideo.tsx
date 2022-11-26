import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import VideoCallout from "./../VideoCallout/videoCallout";
import parse from "html-react-parser";
import { BannerText } from "./../BannerText/bannerText";
import { TitleBanner } from "./../Title/titleBanner";
import { BannerVideoProps } from "api/interfaces";

export const BannerVideo = (props: BannerVideoProps) => {
  const titleParsed = parse(props.title);

  return (
    <>
      <BannerVideoWrapper>
        {props.pageVideo ? (
          <VideoCallout
            pageVideo={props.pageVideo}
            overlayOpacity={props.overlayOpacity}
            overlayColor={props.overlayColor}
            loadingImage={props.loadingImage}
          />
        ) : (
          ""
        )}
        <TextWrapper>
          <TitleBanner title={titleParsed} color={props.color} />
          <BannerText typing={props.typing} text={props.text} />
        </TextWrapper>
      </BannerVideoWrapper>
    </>
  );
};

const BannerVideoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
  }
`;

const TextWrapper = styled.div`
  margin: 80px auto 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT_PX}) {
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;

export default BannerVideo;
