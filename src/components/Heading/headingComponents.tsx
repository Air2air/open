import {
  BREAKPOINT,
  COLOR_TEXT,
  COLOR_WHITE,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_BANNER_SUBHEAD_DESKTOP,
  FONT_BANNER_SUBHEAD_MOBILE,
  FONT_HEADING_DESKTOP,
  FONT_HEADING_MOBILE,
  TEXT_OPACITY,
} from "styles/Constants";
import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
} from "components/Banner/bannerComponents";

export const HeadingContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;

  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
    width: 100%;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
    width: 100%;
  }
  /* background: blue; */
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${BREAKPOINT}px) {
    height: 60%;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 60%;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: green; */
`;

export const TitleText = styled.h1`
  color: ${COLOR_WHITE};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_HEADING_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_HEADING_MOBILE}
  }
`;

export const SubheadContainer = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${BREAKPOINT}px) {
    height: 40%;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 40%;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: red; */
`;

export const SubheadText = styled.div`
  color: ${COLOR_TEXT};
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
  text-shadow: 0 0 4px #000;
  /* background: red; */
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_MOBILE}
  }
`;
