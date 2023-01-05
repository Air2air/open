import { BREAKPOINT, FONT_CONDENSED_DESKTOP, FONT_CONDENSED_MOBILE, FONT_FAMILY_CONDENSED, FONT_WEIGHT_BOLD } from "styles/Constants";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  BUTTON_HEIGHT,
  BUTTON_TEXT_COLOR,
  BUTTON_COLOR_GRAY,
  BUTTON_COLOR_RED,
  BUTTON_COLOR_HOVER_GRAY,
  BUTTON_COLOR_HOVER_RED,
} from "./buttonCSS";
// import { AnimationOnScroll } from "react-animation-on-scroll";

export const ButtonCentered = (props: {
  buttonTo: any;
  buttonText: string;
  buttonColor?: string;
}) => {
  return (
    <>
      <Link to={props.buttonTo}>
        <ButtonDesktop buttonColor={props.buttonColor}>
          <span>{props.buttonText}</span>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </ButtonDesktop>
        <ButtonMobile buttonColor={props.buttonColor}>
          <span>{props.buttonText}</span>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </ButtonMobile>
      </Link>
    </>
  );
};

const buttonWidthDesktop = "250px";
const buttonWidthMobile = "250px";

const ButtonDesktop = styled.div<{ buttonColor?: string }>`
  ${FONT_CONDENSED_DESKTOP};
  height: ${BUTTON_HEIGHT + 20}px;
  color: ${BUTTON_TEXT_COLOR};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${(props: { buttonColor?: string }) =>
    props.buttonColor === "gray" ? BUTTON_COLOR_GRAY : BUTTON_COLOR_RED};
  &:hover {
    background: ${(props: { buttonColor?: string }) =>
      props.buttonColor === "gray"
        ? BUTTON_COLOR_HOVER_GRAY
        : BUTTON_COLOR_HOVER_RED};
  }
  min-width: ${buttonWidthDesktop};
  @media (min-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

const ButtonMobile = styled.div`
  ${FONT_CONDENSED_MOBILE};
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
    props.buttonColor === "gray" ? BUTTON_COLOR_GRAY : BUTTON_COLOR_RED};
  &:hover {
    background: ${(props: { buttonColor?: string }) =>
      props.buttonColor === "gray"
        ? BUTTON_COLOR_HOVER_GRAY
        : BUTTON_COLOR_HOVER_RED};
  }
  width: ${buttonWidthMobile};
  @media (min-width: ${BREAKPOINT}px) {
    display: none;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
`;

export default ButtonCentered;
