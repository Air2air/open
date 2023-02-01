import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import styled from "styled-components";
import {
  COLOR_BANNER_HEADING,
  COLOR_BANNER_SUBHEAD,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import {
  FONT_FAMILY_HEADING,
  FONT_FAMILY_SUBHEAD,
  FONT_SIZE_SUBHEAD_MOBILE,
  FONT_SIZE_HEADING_MOBILE,
  LINE_HEIGHT_HEADING_MOBILE,
  LINE_HEIGHT_SUBHEAD_MOBILE,
} from "styles/Text";
import LazyImage from "./ImageDiv";

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
          <LazyImage src={props.imageBackground} alt={props} />
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
  padding: 2rem 0;
  /* background: #009e5f; */
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
  padding: 0 8px;
  font-size: ${FONT_SIZE_HEADING_MOBILE};
  line-height: ${LINE_HEIGHT_HEADING_MOBILE};
  /* background: green; */
`;

const VariantSubhead = styled.div`
  font-family: ${FONT_FAMILY_SUBHEAD};
  color: ${COLOR_BANNER_SUBHEAD};
  padding: 0 8px;
  font-size: ${FONT_SIZE_SUBHEAD_MOBILE};
  line-height: ${LINE_HEIGHT_SUBHEAD_MOBILE};
  /* background: green; */
`;

const TextWrapper = styled.div`
  margin: 0 auto;
  width: ${CONTENT_WIDTH_MOBILE};
  /* background: green; */
`;

export default SectionMobile;
