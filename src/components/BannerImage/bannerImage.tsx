import { COLOR_TEXT, CONTENT_WIDTH, TEXT_OPACITY } from "../../styles/Constants";
import styled from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ImageCallout from "../ImageCallout/imageCallout";
import parse from "html-react-parser";

export const BannerImage = ({
  pageTitle,
  pageDescription,
  pageImage,
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
      <BannerImageWrapper style={{ height: height }}>
        {pageImage ? (
          <ImageCallout
            pageImage={pageImage}
            overlayOpacity={overlayOpacity}
            overlayColor={overlayColor}
            height={height}
          />
        ) : (
          ""
        )}
        <TextWrapper>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={400}>
            <h1 style={{ color: textColor && textColor }}>
              {pageTitleParsed}
            </h1>
            {typing ? (
              <TypeWriterParagraph
                textStyle={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 300,
                  fontSize: "1.7em",
                  lineHeight: "1.5em",
                  color: COLOR_TEXT,
                  opacity: TEXT_OPACITY,
                }}
                startDelay={1000}
                cursor=""
                cursorColor={COLOR_TEXT}
                text={pageDescription}
                typeSpeed={1}
              />
            ) : (
              <PageDescription>{pageDescriptionParsed}</PageDescription>
            )}
          </AnimationOnScroll>
        </TextWrapper>
      </BannerImageWrapper>
    </>
  );
};

const BannerImageWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
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
  font-size: 1.7em;
  line-height: 1.5em;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
`;

const TypeWriterParagraph = styled(TypeWriterEffect)`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-size: 1.7em;
  line-height: 1.5em;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
`;

export default BannerImage;
