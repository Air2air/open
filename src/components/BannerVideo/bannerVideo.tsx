import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
  CONTENT_WIDTH,
} from "../../styles/Constants";
import styled from "styled-components";
import VideoCallout from "../VideoCallout/videoCallout";
import parse from "html-react-parser";
import { Title } from "../Title/title";
import { BannerText } from "../BannerText/bannerText";

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
  textColor,
  typing,
}) => {
  const pageTitleParsed = parse(pageTitle);
  const pageDescriptionParsed = parse(pageDescription);

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
          <Title titleText={pageTitleParsed} />
          <BannerText typing={typing} bannerText={pageDescriptionParsed} />
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
  width: ${CONTENT_WIDTH};
  text-align: left;
`;

export default BannerVideo;
