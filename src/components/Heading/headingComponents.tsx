import {
  BREAKPOINT,
  COLOR_BANNER_HEADING,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_BANNER_HEADING_DESKTOP,
  FONT_BANNER_HEADING_MOBILE,
  FONT_BANNER_SUBHEAD_DESKTOP,
  FONT_BANNER_SUBHEAD_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
} from "components/Banner/bannerComponents";

export const HeadingContainer = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin: 0 auto 20px auto;
  @media (min-width: ${BREAKPOINT}px) {
    /* height: 60%; */
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    /* height: 60%; */
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: green; */
`;

export const TitleText = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_HEADING_DESKTOP};
    color: ${COLOR_BANNER_HEADING};
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_HEADING_MOBILE}
  }
`;

export const SubheadContainer = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${BREAKPOINT}px) {
    /* height: 40%; */
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    /* height: 40%; */
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: red; */
`;

export const SubheadText = styled.div`
  height: auto;
  text-align: left;
  /* background: red; */
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_MOBILE}
  }
`;


export const DescContainer = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 30px auto;
  @media (min-width: ${BREAKPOINT}px) {
    /* height: 40%; */
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    /* height: 40%; */
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: red; */
`;