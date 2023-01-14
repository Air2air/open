// BUTTONS
export const BUTTON_HEIGHT = 40;
export const BUTTON_WIDTH_DESKTOP = "200px";

const buttonWidthDesktop = "250px";
const buttonWidthMobile = "100%";

export const BUTTON_TEXT_COLOR = "hsl(0, 0%, 90%)";
export const BUTTON_COLOR = "hsl(0, 86%, 36%)";
export const BUTTON_COLOR_HOVER = "hsl(0, 86%, 46%)";
export const BUTTON_COLOR_GRAY = "rgba(0, 0, 0, 0.4)";
export const BUTTON_COLOR_HOVER_GRAY = "rgba(50, 50, 50, 0.4)";


import styled from "styled-components";
import {
  BREAKPOINT,
  FONT_BUTTON_DESKTOP,
  FONT_BUTTON_MOBILE,
  FONT_CONDENSED_DESKTOP,
} from "styles/Constants";


export const ButtonWrapper = styled.div`
  ${FONT_CONDENSED_DESKTOP};
  color: ${BUTTON_TEXT_COLOR};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${BUTTON_HEIGHT}px;
  transition: all 300ms;
  text-transform: uppercase;
  background: ${BUTTON_COLOR};
  &:hover {
    background: ${BUTTON_COLOR_HOVER};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`;

export const ButtonDesktop = styled.div<{ buttonColor?: string }>`
  ${FONT_BUTTON_DESKTOP};
  height: ${BUTTON_HEIGHT}px;
  color: ${BUTTON_TEXT_COLOR};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${(props: { buttonColor?: string }) =>
    props.buttonColor === "gray" ? BUTTON_COLOR_GRAY : BUTTON_COLOR};
  &:hover {
    background: ${(props: { buttonColor?: string }) =>
      props.buttonColor === "gray"
        ? BUTTON_COLOR_HOVER_GRAY
        : BUTTON_COLOR_HOVER};
  }
  min-width: ${buttonWidthDesktop};
  @media (min-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const ButtonMobile = styled.div`
  ${FONT_BUTTON_MOBILE};
  height: ${BUTTON_HEIGHT}px;
  color: ${BUTTON_TEXT_COLOR};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: ${buttonWidthMobile};
  span {
    margin-right: 10px;
  }
  background: ${(props: { buttonColor?: string }) =>
    props.buttonColor === "gray" ? BUTTON_COLOR_GRAY : BUTTON_COLOR};
  &:hover {
    background: ${(props: { buttonColor?: string }) =>
      props.buttonColor === "gray"
        ? BUTTON_COLOR_HOVER_GRAY
        : BUTTON_COLOR_HOVER};
  }
  @media (min-width: ${BREAKPOINT}px) {
    display: none;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
`;
