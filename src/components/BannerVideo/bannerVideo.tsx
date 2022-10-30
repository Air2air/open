import {
  COLOR_TEXT,
  CONTENT_WIDTH,
  TEXT_OPACITY,
} from "../../styles/Constants";
import styled from "styled-components";
import VideoCallout from "../VideoCallout/videoCallout";
import TypeWriterEffect from "react-typewriter-effect";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";

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
  height,
}) => {
  const pageTitleParsed = parse(pageTitle);
  const pageDescriptionParsed = parse(pageDescription);

  return (
    <>
      <BannerVideoWrapper style={{ height: height }}>
        {pageVideo ? (
          <VideoCallout
            pageVideo={pageVideo}
            overlayOpacity={overlayOpacity}
            overlayColor={overlayColor}
            height={height}
          />
        ) : (
          ""
        )}
        <TextWrapper>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={400}>
            <h1 style={{ color: textColor && textColor }}>{pageTitleParsed}</h1>
            {typing ? (
              <TypeWriterParagraph
                textStyle={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 300,
                  fontSize: "1.7em",
                  lineHeight: "1.5em",
                  color: COLOR_TEXT,
                  opacity: TEXT_OPACITY,
                  cursor: "",
                }}
                startDelay={1000}
                cursor=""
                cursorColor="rgba(0,0,0,0)"
                text={pageDescription}
                typeSpeed={1}
              />
            ) : (
              <PageDescription>{pageDescriptionParsed}</PageDescription>
            )}
          </AnimationOnScroll>
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
`;

const TextWrapper = styled.div`
  margin: 80px auto 0 auto;
  z-index: +1;
  height: auto;
  width: ${CONTENT_WIDTH};
  text-align: left;
`;

const PageDescription = styled.div`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.7em;
  line-height: 1.5em;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
`;

const TypeWriterParagraph = styled(TypeWriterEffect)`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.7em;
  line-height: 1.5em;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
`;

export default BannerVideo;
