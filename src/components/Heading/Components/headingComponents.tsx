import {
  BREAKPOINT,
  COLOR_WHITE,
  CONTENT_WIDTH_MOBILE,
  FONT_HEADING_DESKTOP,
  FONT_HEADING_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import { HEADING_HEIGHT_DESKTOP, HEADING_HEIGHT_MOBILE } from "components/Heading/headingCSS";
import { CHART_TEXT_TRANSITION } from "components/Callout/Chart/chartComponents";

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${HEADING_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${HEADING_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
`;

export const TextSection = styled.div`
  position: absolute;
  top: 0;
  transition: all ${CHART_TEXT_TRANSITION}ms;
  width: 100%;
  height: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: ${HEADING_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: ${HEADING_HEIGHT_MOBILE}px;
  }
  /* background: green; */
`;

export const TitleHeading = (props) => {
  return props.title !== "" ? (
    <TitleContainer className="animate__animated animate__fadeInDown animate__delay-0s">
      <TitleStyled color={props.color}>{props.title}</TitleStyled>
    </TitleContainer>
  ) : null;
};

const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  text-align: left;
  height: 40%;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: blue; */
`;

const TitleStyled = styled.h1`
  color: ${COLOR_WHITE};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_HEADING_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_HEADING_MOBILE}
  }
`;
