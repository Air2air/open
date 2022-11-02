import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "../../styles/Constants";
import styled from "styled-components";
import VideoCallout from "../VideoCallout/videoCallout";
import parse from "html-react-parser";
import { BannerText } from "../BannerText/bannerText";
import { TitleBanner } from "../Title/titleBanner";

/* Videos 
Blurry AI = 765127386
Crisp AI = 765122469
Blue DNA on right = 765132534
Blue DNA in foreground = 765130146
Green DNA = 765129157
*/

export const BannerVideo = ({
  pageTitle,
  pageDescription,
  pageVideo,
  overlayOpacity,
  overlayColor,
  typing,
}) => {
  const pageTitleParsed = parse(pageTitle);

  return (
    <>
      <BannerVideoWrapper>
        {pageVideo ? (
          <VideoCallout
            pageVideo={pageVideo}
            overlayOpacity={overlayOpacity}
            overlayColor={overlayColor}
          />
        ) : (
          ""
        )}
        <TextWrapper>
          <TitleBanner titleText={pageTitleParsed} />
          <BannerText typing={typing} bannerText={pageDescription} />
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
