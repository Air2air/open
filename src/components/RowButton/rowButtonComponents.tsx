import {
  BREAKPOINT,
  COLOR_BASE,
  COLOR_BLACK,
  COLOR_BUTTON,
  COLOR_BUTTON_HOVER,
  COLOR_CONTRAST,
  COLOR_CONTRAST_DARK,
  COLOR_LINK_REVERSE,
  COLOR_LINK_REVERSE_HOVER,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_BUTTON_DESKTOP,
  FONT_BUTTON_MOBILE,
  FONT_SUBHEAD_DESKTOP,
} from "styles/Constants";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ROW_BUTTON_HEIGHT_DESKTOP = 70;
const ROW_BUTTON_HEIGHT_MOBILE = 70;

export const RowButtonContainer = styled.div`
  width: 100%;
  background: ${COLOR_CONTRAST};
  @media (min-width: ${BREAKPOINT}px) {
    height: ${ROW_BUTTON_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${ROW_BUTTON_HEIGHT_MOBILE}px;
  }
  /* background-color: blue; */
`;

export const RowButtonInner = styled.div`
  margin: 0 auto;
  display: flex;
  /* justify-content: flex-end; */

  @media (min-width: ${BREAKPOINT}px) {
    height: ${ROW_BUTTON_HEIGHT_DESKTOP}px;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${ROW_BUTTON_HEIGHT_MOBILE}px;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background-color: blue; */
`;

export const RowButtonLeft = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 50%;
  color: ${COLOR_CONTRAST_DARK};
  span {
    margin-left: 10px;
  }
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_BUTTON_DESKTOP};
    height: ${ROW_BUTTON_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BUTTON_MOBILE};
    height: ${ROW_BUTTON_HEIGHT_MOBILE}px;
  }
  /* background: red; */
`;

export const RowButtonRight = styled(Link)`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  transition: all 300ms;
  color: ${COLOR_LINK_REVERSE};
  background: ${COLOR_BUTTON};
  span {
    margin-right: 10px;
  }
  &:hover {
    color: ${COLOR_LINK_REVERSE_HOVER};
    background: ${COLOR_BUTTON_HOVER};
  }
  @media (min-width: ${BREAKPOINT}px) {
    height: ${ROW_BUTTON_HEIGHT_DESKTOP}px;
    ${FONT_BUTTON_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${ROW_BUTTON_HEIGHT_MOBILE}px;
    ${FONT_BUTTON_MOBILE};
  }
  /* background: red; */
`;
