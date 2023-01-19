import {
  BREAKPOINT,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import Container from "components/Container/container";

export const CalloutContainerOuter = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: gold; */
`;

export const CalloutContainerInner = styled.div`
  margin: 0 auto;
  height: auto;
  min-height:120px;
  padding:40px 0;
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: red; */
`;


export const CallOutInner = styled.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 50px 0;
    /* width: ${CONTENT_WIDTH_DESKTOP}; */
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 20px 0;
    /* width: ${CONTENT_WIDTH_MOBILE}; */
  }
  /* background: red;; */
`;

export const CalloutParagraph = styled.div`
  color: ${COLOR_TEXT};
  height: auto;
  text-align: left;
  /* padding-bottom: 20px; */
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_MOBILE};
  }
`;

export const CalloutSkeleton = (props) => (
  <Container {...props}>
    <div style={{ height: 400 }} />
  </Container>
);
