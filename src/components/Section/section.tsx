
import { FetchData } from "fetch/fetch";
import { useEffect, useState } from "react";
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
  FONT_FAMILY_HEADING,
  FONT_FAMILY_SUBHEAD,
  FONT_SIZE_SUBHEAD_DESKTOP,
  FONT_SIZE_SUBHEAD_MOBILE,
  FONT_SIZE_HEADING_DESKTOP,
  FONT_SIZE_HEADING_MOBILE,
  LINE_HEIGHT_HEADING_DESKTOP,
  LINE_HEIGHT_HEADING_MOBILE,
  LINE_HEIGHT_SUBHEAD_DESKTOP,
  LINE_HEIGHT_SUBHEAD_MOBILE,
} from "styles/Text";

const Section = ({ jsonFile }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return null;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // return <>{width > BREAKPOINT ? <FooterDesktop /> : <FooterMobile />}</>;

  return (
    <>


      {data.map((props, index) => (
        <div key={index}>
          {width > BREAKPOINT ? (
            <SectionDesktop key={index} index={index} {...props} />
          ) : (
            <SectionMobile key={index} index={index} {...props} />
          )}
        </div>
      ))}
    </>
  );
};

export default Section;

const SectionDesktop = (props, index) => {
  return (
    <>
      {props.hasParallax === true ? (
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
            <ParallaxHeadingContainer>
              <VariantHeading>
                <TextWrapper
                  style={{
                    color: props.colorTitle,
                  }}
                >
                  {props.text}
                </TextWrapper>
              </VariantHeading>
            </ParallaxHeadingContainer>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      ) : (
        <Banner
          key={index}
          style={{
            height: "auto",
            width: "100%",
            background: props.colorBackground,
          }}
        >
          <VariantSubhead>
            <TextWrapper>{props.text}</TextWrapper>
          </VariantSubhead>
        </Banner>
      )}
    </>
  );
};

const mobileReduction = 0.55;

const SectionMobile = (props, index) => {
  return (
    <>
      {props.hasParallax === true ? (
        <ParallaxBanner
          key={index}
          style={{
            height: props.height * mobileReduction,
            width: "100%",
            background: props.colorBackground,
          }}
        >
          <ImageDiv src={props.imageBackground} />
          <ParallaxBannerLayer speed={props.speedTitle}>
            <ParallaxHeadingContainer>
              <VariantHeading>
                <TextWrapper
                  style={{
                    color: props.colorTitle,
                  }}
                >
                  {props.text}
                </TextWrapper>
              </VariantHeading>
            </ParallaxHeadingContainer>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      ) : (
        <Banner
          key={index}
          style={{
            height: "auto",
            width: "100%",
            background: props.colorBackground,
          }}
        >
          <VariantSubhead>
            <TextWrapper>{props.text}</TextWrapper>
          </VariantSubhead>
        </Banner>
      )}
    </>
  );
};

const Banner = styled.div`
  width: 100%;
  height: auto;

  /* background: #009e5f; */
  @media (min-width: ${BREAKPOINT}px) {
    padding: 4rem 0;
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 2rem 0;
  }
`;

const ImageDiv = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* filter: brightness(0.5); */
`;

const ParallaxHeadingContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: gold; */
`;

const VariantHeading = styled.div`
  font-family: ${FONT_FAMILY_HEADING};
  color: ${COLOR_BANNER_HEADING};
  @media (min-width: ${BREAKPOINT}px) {
    padding: 12px 0;
    font-size: ${FONT_SIZE_HEADING_DESKTOP};
    line-height: ${LINE_HEIGHT_HEADING_DESKTOP};
    /* text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.9); */
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 8px;
    font-size: ${FONT_SIZE_HEADING_MOBILE};
    line-height: ${LINE_HEIGHT_HEADING_MOBILE};
  }
  /* background: green; */
`;

const VariantSubhead = styled.div`
  font-family: ${FONT_FAMILY_SUBHEAD};
  color: ${COLOR_BANNER_SUBHEAD};
  @media (min-width: ${BREAKPOINT}px) {
    padding: 0 8px;
    font-size: ${FONT_SIZE_SUBHEAD_DESKTOP};
    line-height: ${LINE_HEIGHT_SUBHEAD_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 8px;
    font-size: ${FONT_SIZE_SUBHEAD_MOBILE};
    line-height: ${LINE_HEIGHT_SUBHEAD_MOBILE};
  }
  /* background: green; */
`;

const TextWrapper = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    margin: 0 auto;
    width: ${CONTENT_WIDTH_DESKTOP};
    /* background: red; */
  }
  @media (max-width: ${BREAKPOINT}px) {
    margin: 0 auto;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: green; */
`;
