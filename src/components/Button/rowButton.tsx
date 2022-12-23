import {
  BREAKPOINT,
  BUTTON_COLOR_RED,
  BUTTON_COLOR_GRAY,
  BUTTON_COLOR_HOVER_RED,
  BUTTON_COLOR_HOVER_GRAY,
  BUTTON_HEIGHT,
  BUTTON_TEXT_COLOR,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "constants/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Container from "components/Container/container";
// import { AnimationOnScroll } from "react-animation-on-scroll";

export const RowButton = (props: {
  buttonTo: any;
  buttonText: string;
  buttonColor?: string;
}) => {
  return (
    <>
      <ButtonPositioner>
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
      </ButtonPositioner>
    </>
  );
};

const buttonWidthDesktop = "200px";
const buttonWidthMobile = "100%";

const ButtonPositioner = styled.div`
  margin: 0 auto;
  height: ${BUTTON_HEIGHT}px;
  text-align: right;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 5px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 5px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }

`;

const ButtonDesktop = styled.div<{ buttonColor?: string }>`
  height: ${BUTTON_HEIGHT}px;
  font-size: 1.1em;
  font-weight: 500;
  font-family: "Roboto Condensed", sans-serif;
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
  height: ${BUTTON_HEIGHT}px;
  font-size: 1.1em;
  font-weight: 500;
  font-family: "Roboto Condensed", sans-serif;
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

export default RowButton;
