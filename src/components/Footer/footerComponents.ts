import styled from "styled-components";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";

// Desktop
export const FOOTER_HEIGHT_DESKTOP = 400;
export const FOOTER_CONTAINER_HEIGHT_DESKTOP = FOOTER_HEIGHT_DESKTOP * 0.8;
// export const FOOTER_LOGO_HEIGHT_DESKTOP =
//   FOOTER_CONTAINER_HEIGHT_DESKTOP * 0.15;
export const FOOTER_COLUMN_HEIGHT_DESKTOP =
  FOOTER_CONTAINER_HEIGHT_DESKTOP * 0.8;
export const FOOTER_COPYRIGHT_HEIGHT_DESKTOP =
  FOOTER_CONTAINER_HEIGHT_DESKTOP * 0.2;

// Mobile
export const FOOTER_HEIGHT_MOBILE = 240;
export const FOOTER_CONTAINER_HEIGHT_MOBILE = FOOTER_HEIGHT_MOBILE + 0.8;
export const FOOTER_LOGO_HEIGHT_MOBILE = FOOTER_CONTAINER_HEIGHT_MOBILE * 0.2;
export const FOOTER_COPYRIGHT_HEIGHT_MOBILE =
  FOOTER_CONTAINER_HEIGHT_MOBILE * 0.2;
export const FOOTER_COLUMN_HEIGHT_MOBILE =
  FOOTER_CONTAINER_HEIGHT_MOBILE -
  (FOOTER_COPYRIGHT_HEIGHT_MOBILE + FOOTER_LOGO_HEIGHT_MOBILE);

export const FooterWrapper = styled.div`
  position: relative;
  /* z-index: +1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
    height: ${FOOTER_CONTAINER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
    height: ${FOOTER_CONTAINER_HEIGHT_MOBILE}px;
  }
  /* background-color: lightblue; */
`;

export const FooterColumnRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${FOOTER_COLUMN_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${FOOTER_COLUMN_HEIGHT_MOBILE}px;
  }
  /* background-color: gold; */
`;

export const FooterColumn = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${FOOTER_COLUMN_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${FOOTER_COLUMN_HEIGHT_MOBILE}px;
  }
  /* background: gold; */
`;
