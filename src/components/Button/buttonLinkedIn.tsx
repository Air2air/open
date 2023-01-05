import styled from "styled-components";
import LogoLinkedIn from "images/logo_linkedin.svg";
import {
  BUTTON_HEIGHT_LINKEDIN,
  BUTTON_TEXT_COLOR,
  BUTTON_COLOR_LINKEDIN,
  BUTTON_COLOR_LINKEDIN_HOVER,
} from "./buttonCSS";
import { FONT_CONDENSED_DESKTOP, FONT_FAMILY_CONDENSED, FONT_WEIGHT_BOLD } from "styles/Constants";

export const ButtonLinkedIn = (props: { to: string; text: string }) => {
  return (
    <>
      <ButtonPositioner>
        <a href={props.to}>
          <ButtonWrapper>
            <LogoLinkedIn />
            <span>{props.text}</span>
          </ButtonWrapper>
        </a>
      </ButtonPositioner>
    </>
  );
};

const ButtonPositioner = styled.div`
  height: ${BUTTON_HEIGHT_LINKEDIN}px;
`;

const ButtonWrapper = styled.div`
  ${FONT_CONDENSED_DESKTOP};
  color: ${BUTTON_TEXT_COLOR};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${BUTTON_HEIGHT_LINKEDIN}px;
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
