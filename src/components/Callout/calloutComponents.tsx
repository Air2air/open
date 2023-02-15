import {
  BREAKPOINT,

  CALLOUT_HEIGHT_DESKTOP,

  CALLOUT_HEIGHT_MOBILE,

  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_BANNER_HEADING_DESKTOP,
  FONT_BANNER_HEADING_MOBILE,
  FONT_BANNER_SUBHEAD_DESKTOP,
  FONT_BANNER_SUBHEAD_MOBILE,

} from "styles/Constants";
import styled from "styled-components";
import Container from "components/Container/container";

export const CallOutOuter = styled.div`
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: calc(100vh - ${CALLOUT_HEIGHT_DESKTOP}px);
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: calc(100vh - ${CALLOUT_HEIGHT_MOBILE}px);
  }
`;

export const CallOutInner = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
    min-height: calc(100vh - ${CALLOUT_HEIGHT_DESKTOP}px);
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
    min-height: calc(100vh - ${CALLOUT_HEIGHT_MOBILE}px);
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
  @media (min-width: ${BREAKPOINT}px) {
    height: 100px;
    ${FONT_BANNER_HEADING_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 50px;
    ${FONT_BANNER_HEADING_MOBILE};
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
