import styled from "styled-components";
import { COLOR_BASE } from "styles/Colors";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";

const orgImageHeight = "100px";

export const OrgsWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  background: ${COLOR_BASE};
`;

export const OrgInnerWrapper = styled.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
    padding: 50px 0;
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
    padding: 20px 0;
  }
`;

export const OrgMapImageRow = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;
  grid-template-columns: auto auto auto;
`;

export const OrgMapImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${orgImageHeight};
  /* background: gold; */
`;

export const OrgMapImage = styled.img`
  height: auto;
`;
