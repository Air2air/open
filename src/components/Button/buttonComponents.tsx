// BUTTONS
export const BUTTON_HEIGHT = 40;
export const BUTTON_WIDTH_DESKTOP = "200px";

const buttonWidthDesktop = "250px";
const buttonWidthMobile = "100%";



import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_BUTTON,
  COLOR_BUTTON_HOVER,
  COLOR_BUTTON_TEXT,
  FONT_BUTTON_DESKTOP,
  FONT_BUTTON_MOBILE,
  FONT_SECONDARY_DESKTOP,
} from "styles/Constants";

export const ButtonWrapper = styled.div`
  ${FONT_SECONDARY_DESKTOP};
  color: ${COLOR_BUTTON_TEXT};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${BUTTON_HEIGHT}px;
  transition: all 300ms;
  text-transform: uppercase;
  background: ${COLOR_BUTTON};
  &:hover {
    background: ${COLOR_BUTTON_HOVER};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`;

export const ButtonDesktop = styled.div`
  ${FONT_BUTTON_DESKTOP};
  height: ${BUTTON_HEIGHT}px;
  color: ${COLOR_BUTTON_TEXT};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${COLOR_BUTTON};
  &:hover {
    background: ${COLOR_BUTTON_HOVER};
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
  color: ${COLOR_BUTTON_TEXT};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: ${buttonWidthMobile};
  span {
    margin-right: 10px;
  }
  background: ${COLOR_BUTTON};
  &:hover {
    background: ${COLOR_BUTTON_HOVER};
  }
  @media (min-width: ${BREAKPOINT}px) {
    display: none;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
`;
