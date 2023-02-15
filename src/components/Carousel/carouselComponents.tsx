import styled from "styled-components";
import { BREAKPOINT, CALLOUT_HEIGHT_DESKTOP, CALLOUT_HEIGHT_MOBILE, CONTENT_WIDTH_DESKTOP, CONTENT_WIDTH_MOBILE } from "styles/Constants";
import { FONT_BANNER_HEADING_DESKTOP, FONT_BANNER_HEADING_MOBILE, FONT_BANNER_SUBHEAD_DESKTOP, FONT_BANNER_SUBHEAD_MOBILE } from "styles/Text";

export const OuterPositioner = styled.div`
  /* position: relative; */
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: calc(100vh - ${CALLOUT_HEIGHT_DESKTOP}px);
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: calc(100vh - ${CALLOUT_HEIGHT_MOBILE}px);
  }
  /* background: red; */
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
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_MOBILE}
  }
  /* background: red; */
`;
