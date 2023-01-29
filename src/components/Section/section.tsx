
import Spacer from "components/Spacer/spacer";
import { FetchData } from "fetch/fetch";
import { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_BANNER_HEADING,
  COLOR_BANNER_SUBHEAD,
  COLOR_BASE,
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
      {width > BREAKPOINT ? null : <Spacer height={70} />}

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
            <VariantHeading>
              <ContrastContainer>
                <ResponsiveWrapper>{props.text}</ResponsiveWrapper>
              </ContrastContainer>
            </VariantHeading>
          ) : (
            <VariantSubhead>
              <ResponsiveWrapper>{props.text}</ResponsiveWrapper>
            </VariantSubhead>
          )}
        </TitleContainer>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

const mobileReduction = 0.55;

const SectionMobile = (props, index) => {
  return (
    <>
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
              <VariantHeading>
                <ResponsiveWrapper>{props.text}</ResponsiveWrapper>
              </VariantHeading>
            ) : (
              <VariantSubhead>
                <ResponsiveWrapper>{props.text}</ResponsiveWrapper>
              </VariantSubhead>
            )}
          </TitleContainer>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

const ImageDiv = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContrastContainer = styled.div`
padding:10px 0;
  background: ${COLOR_BASE};
  width: 100vw;
  height: auto;
`;

const ResponsiveWrapper = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    margin:0 auto;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    margin:0 auto;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: green; */
`;



const TitleContainer = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    ${(subtitle) =>
      subtitle ? FONT_BANNER_HEADING_DESKTOP : FONT_BANNER_SUBHEAD_DESKTOP};
    width: 100%;
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${(subtitle) =>
      subtitle ? FONT_BANNER_HEADING_MOBILE : FONT_BANNER_SUBHEAD_MOBILE};
    width: 100%;
  }
  /* background: green; */
`;

const VariantHeading = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    padding: 12px 0;
    font-size: ${FONT_SIZE_HEADING_DESKTOP};
    font-family: ${FONT_FAMILY_HEADING};
    line-height: ${LINE_HEIGHT_HEADING_DESKTOP};
    color: ${COLOR_BANNER_HEADING};
    width: ${CONTENT_WIDTH_DESKTOP};
    /* text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.9); */
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 8px;
    font-size: ${FONT_SIZE_HEADING_MOBILE};
    font-family: ${FONT_FAMILY_HEADING};
    line-height: ${LINE_HEIGHT_HEADING_MOBILE};
    color: ${COLOR_BANNER_HEADING};
    width: ${CONTENT_WIDTH_MOBILE};
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
