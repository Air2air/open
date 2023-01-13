import styled from "styled-components";
import { BREAKPOINT, BREAKPOINT_MID, COLOR_BLACK } from "styles/Constants";

// Banner
export const BANNER_HEIGHT_DESKTOP = 440;
export const BANNER_HEIGHT_MOBILE = 350;
export const BANNER_PADDING_TOP_DESKTOP = 210;
export const BANNER_PADDING_TOP_MOBILE = 160;



export const BannerVideoWrapper = styled.div`
  position: relative;
  top: 0;
  left:0;
  width: 100vw;
  overflow: hidden;
  background: ${COLOR_BLACK};
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

export const BannerImageWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  overflow: hidden;
  background: ${COLOR_BLACK};
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  overflow: hidden;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

export const BannerLoadingWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  overflow: hidden;
  background: ${COLOR_BLACK};
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;



export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  object-fit: cover;
  object-position: center;
  /* z-index: 1; */
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT_MID}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;
