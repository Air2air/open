import {
  BREAKPOINT,
  COLOR_BUTTON,
  COLOR_BUTTON_HOVER,
  COLOR_LINK_REVERSE,
  COLOR_LINK_REVERSE_HOVER,
  FONT_BUTTON_DESKTOP,
  FONT_BUTTON_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const RowButton = (props: { buttonTo: string; buttonText: string }) => {
  return (
    <>
      <RowButtonOuter>
        <RowButtonInner to={props.buttonTo}>
          <span>{props.buttonText} </span>
          <FontAwesomeIcon icon={faChevronRight} size="sm" />
        </RowButtonInner>
      </RowButtonOuter>
    </>
  );
};

const RowButtonOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${COLOR_BUTTON};
  @media (min-width: ${BREAKPOINT}px) {
    height: 100px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 100px;
  }
  /* background-color: blue; */
`;

const RowButtonInner = styled(Link)`
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
    height: 100px;
    ${FONT_BUTTON_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 100px;
    ${FONT_BUTTON_MOBILE};
  }
  /* background: red; */
`;

export default RowButton;
