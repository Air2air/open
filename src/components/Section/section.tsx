import { FetchData } from "fetch/fetch";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_BANNER_HEADING,
  COLOR_BANNER_SUBHEAD,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import {
  FONT_BANNER_HEADING_DESKTOP,
  FONT_BANNER_HEADING_MOBILE,
  FONT_BANNER_SUBHEAD_DESKTOP,
  FONT_BANNER_SUBHEAD_MOBILE,
  FONT_FAMILY_HEADING,
  FONT_FAMILY_SUBHEAD,
  FONT_SIZE_BANNER_SUBHEAD_DESKTOP,
  FONT_SIZE_BANNER_SUBHEAD_MOBILE,
  FONT_SIZE_HEADING_DESKTOP,
  FONT_SIZE_HEADING_MOBILE,
  LINE_HEIGHT_HEADING_DESKTOP,
  LINE_HEIGHT_HEADING_MOBILE,
  LINE_HEIGHT_SUBHEAD_DESKTOP,
  LINE_HEIGHT_SUBHEAD_MOBILE,
} from "styles/Text";

const Section = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return null;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.map((props, index) => (
        <>
          <ParallaxBanner
            key={index}
            style={{
              height: props.height,
              width: "100%",
              background: props.colorBackground,
            }}
          >
            <ImageDiv src={props.imageBackground} />

            <ParallaxBannerLayer speed={props.speedTitle}>
              <TitleContainer
                style={{
                  color: props.colorTitle,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {props.subtitle !== true ? (
                  <VariantHeading>{props.text}</VariantHeading>
                ) : (
                  <VariantSubhead>{props.text}</VariantSubhead>
                )}
              </TitleContainer>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </>
      ))}
    </>
  );
};

export default Section;

const ImageDiv = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleContainer = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    ${(subtitle) =>
      subtitle ? FONT_BANNER_HEADING_DESKTOP : FONT_BANNER_SUBHEAD_DESKTOP};
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${(subtitle) =>
      subtitle ? FONT_BANNER_HEADING_MOBILE : FONT_BANNER_SUBHEAD_MOBILE};
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: green; */
`;

const VariantHeading = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    padding: 0 8px;
    font-size: ${FONT_SIZE_HEADING_DESKTOP};
    font-family: ${FONT_FAMILY_HEADING};
    line-height: ${LINE_HEIGHT_HEADING_DESKTOP};
    color: ${COLOR_BANNER_HEADING};
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 8px;
    font-size: ${FONT_SIZE_HEADING_MOBILE};
    font-family: ${FONT_FAMILY_HEADING};
    line-height: ${LINE_HEIGHT_HEADING_MOBILE};
    color: ${COLOR_BANNER_HEADING};
  }
  /* background: green; */
`;

const VariantSubhead = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    padding: 0 8px;
    font-size: ${FONT_SIZE_BANNER_SUBHEAD_DESKTOP};
    font-family: ${FONT_FAMILY_SUBHEAD};
    line-height: ${LINE_HEIGHT_SUBHEAD_DESKTOP};
    color: ${COLOR_BANNER_SUBHEAD};
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 8px;
    font-size: ${FONT_SIZE_BANNER_SUBHEAD_MOBILE};
    font-family: ${FONT_FAMILY_SUBHEAD};
    line-height: ${LINE_HEIGHT_SUBHEAD_MOBILE};
    color: ${COLOR_BANNER_SUBHEAD};
  }
  /* background: green; */
`;
