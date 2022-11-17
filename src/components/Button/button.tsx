import {
  BREAKPOINT_PX,
  BUTTON_COLOR,
  BUTTON_COLOR_HOVER,
  BUTTON_HEIGHT_PX,
  BUTTON_TEXT_COLOR,
} from "./../../styles/Constants";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Button = (props: { to: any; text: string }) => {
  return (
    <>
      <ButtonPositioner>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={0}>
          <Link to={props.to}>
            <ButtonDesktop className="button">
              <span>{props.text}</span>
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </ButtonDesktop>
            <ButtonMobile className="button">
              <span>{props.text}</span>
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </ButtonMobile>
          </Link>
        </AnimationOnScroll>
      </ButtonPositioner>
    </>
  );
};

const buttonWidthDesktop = "200px";
const buttonWidthMobile = "100%";

const ButtonPositioner = styled.div`
  margin: 0 auto;
  height: ${BUTTON_HEIGHT_PX};
  text-align: right;
  width: 100%;
  /* background: gold; */
  .button {
    height: ${BUTTON_HEIGHT_PX};
    font-size: 1.1em;
    font-weight: 500;
    font-family: "Roboto Condensed", sans-serif;
    color: ${BUTTON_TEXT_COLOR};
    align-items: center;
    justify-content: center;
    transition: all 300ms;
    text-transform: uppercase;
    background: ${BUTTON_COLOR};
    &:hover {
      background: ${BUTTON_COLOR_HOVER};
    }
    span {
      margin-right: 10px;
    }
  }
`;

const ButtonDesktop = styled.div`
  min-width: ${buttonWidthDesktop};
  @media (min-width: ${BREAKPOINT_PX}) {
    display: inline-flex;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    display: none;
  }
`;

const ButtonMobile = styled.div`
  width: ${buttonWidthMobile};
  @media (min-width: ${BREAKPOINT_PX}) {
    display: none;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    display: inline-flex;
  }
`;

export default Button;
