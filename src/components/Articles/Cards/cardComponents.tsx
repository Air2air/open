import {
  BREAKPOINT,
  COLOR_WHITE,
  FONT_CAPTION_DESKTOP,
  FONT_CAPTION_MOBILE,
} from "styles/Constants";
import {
  BANNER_CARD_PADDING_TOP_DESKTOP,
  BANNER_CARD_PADDING_TOP_MOBILE,
  CARD_HEIGHT_DESKTOP,
  CARD_WIDTH_DESKTOP,
  CARD_HEIGHT_MOBILE,
  CARD_WIDTH_MOBILE,
} from "./cardConstants";
import styled from "styled-components";

export const CardPositioner = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    padding-top: ${BANNER_CARD_PADDING_TOP_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding-top: ${BANNER_CARD_PADDING_TOP_MOBILE}px;
  }
  /* background: red; */
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`;

export const CardWrapper = styled.div`
  margin: 20px 12px;
  position: relative;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .card-background {
    filter: brightness(0.7);
    transform: scale(1);
  }
  .card-block {
    transition: all 600ms;
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:hover {
    .card-background {
      filter: brightness(1);
      transform: scale(1.03);
    }
    .card-block {
      /* transition: all 600ms; */
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  overflow: hidden;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_DESKTOP}px;
    width: ${CARD_WIDTH_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_MOBILE}px;
    width: ${CARD_WIDTH_MOBILE}px;
  }
  /* background-color: blue; */
`;

export const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_DESKTOP}px;
    width: ${CARD_WIDTH_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_MOBILE}px;
    width: ${CARD_WIDTH_MOBILE}px;
  }
  background-color: blue;
`;

export const CardTextSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_DESKTOP}px;
    width: ${CARD_WIDTH_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_MOBILE}px;
    width: ${CARD_WIDTH_MOBILE}px;
  }
  /* background-color: blue; */
`;

export const CardTextBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: ${BREAKPOINT}px) {
    height: 50%;
    width: ${CARD_WIDTH_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 50%;
    width: ${CARD_WIDTH_MOBILE}px;
  }
`;

export const CardText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  color: ${COLOR_WHITE};
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  @media (min-width: ${BREAKPOINT}px) {
    height: 50%;
    ${FONT_CAPTION_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 50%;
    ${FONT_CAPTION_MOBILE}
  }
  /* background-color: blue; */
`;
