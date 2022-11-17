import {
  BUTTON_COLOR_LINKEDIN,
  BUTTON_COLOR_LINKEDIN_HOVER,
  BUTTON_HEIGHT_LINKEDIN_PX,
  BUTTON_TEXT_COLOR,
} from "./../../styles/Constants";
import styled from "styled-components";
import { ReactComponent as LogoLinkedIn } from "./../../images/logo_linkedin.svg";

export const ButtonLinkedIn = (props: { to: string; text: string }) => {
  return (
    <>
      <ButtonPositioner>
        <a href={props.to}>
          <ButtonWrapper>
            <LogoLinkedIn className="icon" />
            <span>{props.text}</span>
          </ButtonWrapper>
        </a>
      </ButtonPositioner>
    </>
  );
};

const ButtonPositioner = styled.div`
  height: ${BUTTON_HEIGHT_LINKEDIN_PX};
`;

const ButtonWrapper = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  font-family: "Roboto Condensed", sans-serif;
  color: ${BUTTON_TEXT_COLOR};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${BUTTON_HEIGHT_LINKEDIN_PX};
  transition: all 300ms;
  text-transform: uppercase;
  background: ${BUTTON_COLOR_LINKEDIN};
  &:hover {
    background: ${BUTTON_COLOR_LINKEDIN_HOVER};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`;

export default ButtonLinkedIn;
