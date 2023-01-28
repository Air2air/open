import Container from "components/Container/container";
import { FetchData } from "fetch/fetch";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import styled from "styled-components";
import { COLOR_BANNER_HEADING } from "styles/Colors";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import {
  FONT_BANNER_HEADING_DESKTOP,
  FONT_BANNER_HEADING_MOBILE,
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
              height: props.height + "px",
              position: "relative",
            }}
          >
            <ParallaxBannerLayer>
              <ImageDiv
                src={props.imageBackground}
                style={{
                  // objectFit: "contain",
                  position: 'absolute',
                  width: "100%",
                  height: "auto",
                  top: "50%",
                  left: "50%",
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer
              speed={props.speedTitle}
              style={{
                position: "absolute",
                height: props.height + "px",
              }}
            >
              <Container>
                <TitleContainer style={{ color: props.colorTitle }}>
                  {props.title}
                </TitleContainer>
              </Container>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </>
      ))}
    </>
  );
};

export default Section;

const ImageDiv = styled.img`
  /* background-position: center center;
  background-size: "cover"; */
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  z-index: +2;
  /* color: ${COLOR_BANNER_HEADING}; */
  @media (min-width: ${BREAKPOINT}px) {
    width: auto; //${CONTENT_WIDTH_DESKTOP};
    ${FONT_BANNER_HEADING_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: auto; //${CONTENT_WIDTH_MOBILE};
    ${FONT_BANNER_HEADING_MOBILE};
  }
  background: green;
`;
