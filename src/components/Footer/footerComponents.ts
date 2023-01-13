import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR_RED, COLOR_RED_HOVER, COLOR_BASE_LIGHT } from "styles/Colors";
import { BREAKPOINT, CONTENT_WIDTH_DESKTOP } from "styles/Constants";
import { FONT_CAPTION_DESKTOP, FONT_CAPTION_MOBILE } from "styles/Text";

// Footer
export const FOOTER_HEIGHT_DESKTOP = 400;
export const FOOTER_CONTAINER_HEIGHT_DESKTOP = FOOTER_HEIGHT_DESKTOP * 0.8;
export const FOOTER_CONTENT_HEIGHT_DESKTOP =
  FOOTER_CONTAINER_HEIGHT_DESKTOP * 0.8;
export const FOOTER_COPYRIGHT_HEIGHT_DESKTOP =
  FOOTER_CONTAINER_HEIGHT_DESKTOP * 0.2;

export const FOOTER_HEIGHT_MOBILE = 350;
export const FOOTER_CONTAINER_HEIGHT_MOBILE = FOOTER_HEIGHT_MOBILE * 0.8;
export const FOOTER_LOGO_HEIGHT_MOBILE = FOOTER_CONTAINER_HEIGHT_MOBILE * 0.15;
export const FOOTER_CONTENT_HEIGHT_MOBILE =
  FOOTER_CONTAINER_HEIGHT_MOBILE * 0.5;
export const FOOTER_COPYRIGHT_HEIGHT_MOBILE =
  FOOTER_CONTAINER_HEIGHT_MOBILE * 0.2;

export const FooterWrapper = styled.div`
  position: relative;
  z-index: +1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: ${FOOTER_HEIGHT_DESKTOP}px;
  /* margin: 50px 0 0 0; */
  /* background-color: blue; */
`;

export const FooterContainer = styled.div`
  display: flex;
  z-index: +1;
  flex-direction: column;
  width: ${CONTENT_WIDTH_DESKTOP};
  margin: 0 auto;
  height: ${FOOTER_CONTAINER_HEIGHT_DESKTOP}px;
  /* background-color: lightblue; */
`;

export const FooterContentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${FOOTER_CONTENT_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${FOOTER_CONTENT_HEIGHT_MOBILE}px;
  }
  /* background-color: gold; */
`;

export const FooterColumn = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: ${FOOTER_CONTENT_HEIGHT_DESKTOP}px;
  /* background: blue; */
`;

export const FooterLinkColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${FOOTER_CONTENT_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${FOOTER_CONTENT_HEIGHT_MOBILE}px;
  }
  /* background: green; */
`;

export const FooterLink = styled(Link)`
  color: ${COLOR_RED};
  transition: all 200ms;
  &:hover {
    color: ${COLOR_RED_HOVER};
  }
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_CAPTION_DESKTOP}
    padding: 8px 0;
    text-align: left;
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_CAPTION_MOBILE}
    padding: 6px 0;
    text-align: center;
  }
`;

export const FooterCopyright = styled.div`
  z-index: +1;
  font-size: 0.9em;
  color: ${COLOR_BASE_LIGHT};
  display: flex;
  align-items: center;
  text-align: center;
  div {
    color: ${COLOR_BASE_LIGHT};
  }
  @media (min-width: ${BREAKPOINT}px) {
    height: ${FOOTER_COPYRIGHT_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${FOOTER_COPYRIGHT_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
`;

export const FooterLogoRow = styled(AnimationOnScroll)`
  display: flex;
  /* z-index: +1; */
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: ${FOOTER_LOGO_HEIGHT_MOBILE}px;
  a.link {
    opacity: 0.4;
  }
  &:hover {
    a.link {
      opacity: 1;
    }
  }
  background: green;
`;

export const FooterLogoWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  width: 24px;
  padding: 0;
  opacity: 0.5;
  transform: scale(1);
  transition: all 300ms;
  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }
  /* background-color: blue; */
`;
