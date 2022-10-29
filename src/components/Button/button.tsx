import {
  BUTTON_COLOR,
  BUTTON_COLOR_HOVER,
  BUTTON_HEIGHT_PX,
  BUTTON_TEXT_COLOR,
} from "../../styles/Constants";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Button = (props: { to: string; text: string }) => {
  return (
    <>
      <ButtonPositioner>
        <Link to={props.to}>
          <ButtonWrapper>
            <span>{props.text}</span>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
          </ButtonWrapper>
        </Link>
      </ButtonPositioner>
    </>
  );
};

const ButtonPositioner = styled.div`
  height: ${BUTTON_HEIGHT_PX};
  text-align: right;
  margin-left: auto;
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  font-family: "Roboto Condensed", sans-serif;
  color: ${BUTTON_TEXT_COLOR};
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  height: ${BUTTON_HEIGHT_PX};
  transition: all 300ms;
  text-transform: uppercase;
  background: ${BUTTON_COLOR};
  &:hover {
    background: ${BUTTON_COLOR_HOVER};
  }
  span {
    margin-right: 10px;
  }
`;

export default Button;
