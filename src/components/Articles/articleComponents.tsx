import {
  BREAKPOINT,
  CARD_HEIGHT_DESKTOP,
  CARD_HEIGHT_MOBILE,
  CARD_WIDTH_DESKTOP,
  CARD_WIDTH_MOBILE,
  COLOR_BASE_1,
  COLOR_WHITE,
  HEADER_HEIGHT_DESKTOP,
  HEADER_HEIGHT_MOBILE,
} from "constants/index";
import styled from "styled-components";

export const CardHolder = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${COLOR_BASE_1};
  @media (min-width: ${BREAKPOINT}px) {
    padding-top: ${HEADER_HEIGHT_DESKTOP}px;
    height: auto;
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding-top: ${HEADER_HEIGHT_MOBILE}px;
    height: auto;
  }
`;

export const CardRow = styled.div`
  box-sizing: border-box;
  margin: 40px 0;
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`;

export const CardContentWrapper = styled.div`
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
  /* background-color: blue; */
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
  font-weight: 400;
  font-family: "Roboto Condensed", sans-serif;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  @media (min-width: ${BREAKPOINT}px) {
    height: 50%;
    width: ${CARD_WIDTH_DESKTOP}px;
    font-size: 1.3em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 50%;
    width: ${CARD_WIDTH_MOBILE}px;
    font-size: 1.3em;
  }
  /* background-color: blue; */
`;
