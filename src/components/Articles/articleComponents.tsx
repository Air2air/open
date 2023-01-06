import {
  BREAKPOINT,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
} from "styles/Constants";

import styled from "styled-components";

export const ArticleBodyContainer = styled.div`
  margin: 20px 0;
  position: relative;
  top: 0;
  height: auto;
`;

export const ArticleInner = styled.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 50px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 20px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: red;; */
`;

export const ArticleBodyParagraph = styled.div`
  color: ${COLOR_TEXT};
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    /* ${FONT_DEFAULT_DESKTOP} */
  }
  @media (max-width: ${BREAKPOINT}px) {
    /* ${FONT_DEFAULT_MOBILE} */
  }
`;
