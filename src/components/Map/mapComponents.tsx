import styled from "styled-components";
import "./keyframes.scss";
import { BREAKPOINT, COLOR_RED } from "styles/Constants";
import ReactTooltip from "react-tooltip";

const MAP_SECTION_HEIGHT_DESKTOP = 400;
const MAP_SECTION_HEIGHT_MOBILE = 320;

const MAP_HEIGHT_DESKTOP = 300;
const MAP_HEIGHT_MOBILE = 240;

export const MapInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: auto;
  text-align: left;
  box-sizing: border-box;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${MAP_SECTION_HEIGHT_DESKTOP}px;
    padding-top: 20px;
    padding-bottom: 0;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${MAP_SECTION_HEIGHT_MOBILE}px;
    padding-top: 20px;
    padding-bottom: 0;
  }
  /* background: red;; */
`;

export const SVGContainer = styled.div`
  /* display: inline-block; */
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  /* padding-bottom: 44%; */
  vertical-align: middle;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${MAP_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${MAP_HEIGHT_MOBILE}px;
  }
  /* background: ${COLOR_RED}; */
`;

export const MapImageDiv = styled.div`
  > svg {
    z-index: +1;
    position: "absolute";
    top: 0;
    left: 0;
    /* display: "inline-block"; */
    width: 100%;
    @media (min-width: ${BREAKPOINT}px) {
      height: ${MAP_HEIGHT_DESKTOP}px;
    }
    @media (max-width: ${BREAKPOINT}px) {
      height: ${MAP_HEIGHT_MOBILE}px;
    }
  }
  /* background: blue; */
`;

export const Tooltip = styled(ReactTooltip)`
  font-size: 2rem;
`;
