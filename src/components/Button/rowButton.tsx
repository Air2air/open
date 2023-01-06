import {
  BREAKPOINT,
  FONT_BUTTON_DESKTOP,
  FONT_BUTTON_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Container from "components/Container/container";
import {
  BUTTON_HEIGHT,
  BUTTON_TEXT_COLOR,
  BUTTON_COLOR_GRAY,
  BUTTON_COLOR_RED,
  BUTTON_COLOR_HOVER_GRAY,
  BUTTON_COLOR_HOVER_RED,
} from "./buttonCSS";

export const RowButton = (props: {
  buttonTo: any;
  buttonText: string;
  buttonColor?: string;
  backgroundColor?: number;
}) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <ButtonPositioner>
          <Link to={props.buttonTo}>
            <ButtonDesktop buttonColor={props.buttonColor}>
              <span>{props.buttonText} </span>
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </ButtonDesktop>
            <ButtonMobile buttonColor={props.buttonColor}>
              <span>{props.buttonText}</span>
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </ButtonMobile>
          </Link>
        </ButtonPositioner>
      </Container>
    </>
  );
};

const buttonWidthDesktop = "200px";

const ButtonPositioner = styled.div`
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BUTTON_HEIGHT}px;
    text-align: right;
    justify-content: flex-end;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BUTTON_HEIGHT}px;
  }
  /* background: green; */
`;

const ButtonDesktop = styled.div<{ buttonColor?: string }>`
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
  ${FONT_BUTTON_MOBILE};
  height: ${BUTTON_HEIGHT}px;
  color: ${BUTTON_TEXT_COLOR};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: 100%;
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
  @media (min-width: ${BREAKPOINT}px) {
    display: none;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
`;

export default RowButton;
