import {
  BREAKPOINT,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_BANNER_HEADING_DESKTOP,
  FONT_BANNER_HEADING_MOBILE,
  FONT_BANNER_SUBHEAD_DESKTOP,
  FONT_BANNER_SUBHEAD_MOBILE,
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
} from "styles/Constants";
import styled from "styled-components";
import Container from "components/Container/container";

const CALLOUT_HEIGHT = HEADER_HEIGHT + FOOTER_HEIGHT;

export const CallOutOuter = styled.div`
  min-height: calc(100vh - ${CALLOUT_HEIGHT}px);
  width: 100%;
`;

export const CallOutInner = styled.div`
  margin: 0 auto;
  min-height: calc(100vh - ${CALLOUT_HEIGHT}px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: red; */
`;

export const CalloutSkeleton = (props) => (
  <Container {...props}>
    <div style={{ height: 400 }} />
  </Container>
);

export const VariantTitle = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${COLOR_TEXT};
  @media (min-width: ${BREAKPOINT}px) {
    height: 100px;
    ${FONT_BANNER_HEADING_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 100px;
    ${FONT_BANNER_HEADING_MOBILE};
    color: #ccc;
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
  color: ${COLOR_TEXT};
  /* background: red; */
`;
