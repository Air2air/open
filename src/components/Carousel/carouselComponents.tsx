import styled from "styled-components";
import {
  BREAKPOINT,
  CALLOUT_HEIGHT_DESKTOP,
  CALLOUT_HEIGHT_MOBILE,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import {
  FONT_BANNER_HEADING_DESKTOP,
  FONT_BANNER_HEADING_MOBILE,
  FONT_BANNER_SUBHEAD_DESKTOP,
  FONT_BANNER_SUBHEAD_MOBILE,
} from "styles/Text";

export const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background: blue;
`;

export const OuterPositionerImage = styled.div`
  /* position: relative; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: calc(100vh - ${CALLOUT_HEIGHT_DESKTOP}px);
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: calc(100vh - ${CALLOUT_HEIGHT_MOBILE}px);
  }
  /* background: red; */
`;

export const OuterPositionerText = styled.div`
  /* position: relative; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: calc(70vh - ${CALLOUT_HEIGHT_DESKTOP}px);
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: calc(70vh - ${CALLOUT_HEIGHT_MOBILE}px);
  }
  /* background: gold; */
`;

export const InnerPositioner = styled.div`
  /* position: relative; */
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: gold;
`;

export const TextWrapper = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: blue; */
`;

export const VariantTitle = styled.div`
  text-align: center;
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_HEADING_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_HEADING_MOBILE}
  }

  /* background: green; */
`;

export const VariantText = styled.div`
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_DESKTOP}
    color:#333;
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_MOBILE}
    color:#333;
  }
  /* background: red; */
`;
