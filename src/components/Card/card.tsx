import {
  BREAKPOINT,
  BUTTON_COLOR_RED,
  BUTTON_COLOR_GRAY,
  BUTTON_COLOR_HOVER_RED,
  BUTTON_COLOR_HOVER_GRAY,
  BUTTON_HEIGHT,
  BUTTON_TEXT_COLOR,
} from "constants/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export const Card = (props: {
  cardTo: any;
  cardText: string;
  cardColor?: string;
}) => {
  return (
    <>
      <CardPositioner>
        {/* <AnimationOnScroll animateIn="animate__fadeInUp" delay={0}> */}
        <Link to={props.cardTo}>
          <CardDesktop cardColor={props.cardColor}>
            <span>{props.cardText}</span>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
          </CardDesktop>
          <CardMobile cardColor={props.cardColor}>
            <span>{props.cardText}</span>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
          </CardMobile>
        </Link>
        {/* </AnimationOnScroll> */}
      </CardPositioner>
    </>
  );
};

const cardWidthDesktop = "200px";
const cardWidthMobile = "100%";

const CardPositioner = styled.div`
  margin: 0 auto;
  height: ${BUTTON_HEIGHT}px;
  text-align: right;
  width: 100%;
`;

const CardDesktop = styled.div<{ cardColor?: string }>`
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
  background: ${(props: { cardColor?: string }) =>
    props.cardColor === "gray" ? BUTTON_COLOR_GRAY : BUTTON_COLOR_RED};
  &:hover {
    background: ${(props: { cardColor?: string }) =>
      props.cardColor === "gray"
        ? BUTTON_COLOR_HOVER_GRAY
        : BUTTON_COLOR_HOVER_RED};
  }
  min-width: ${cardWidthDesktop};
  @media (min-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

const CardMobile = styled.div`
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
  background: ${(props: { cardColor?: string }) =>
    props.cardColor === "gray" ? BUTTON_COLOR_GRAY : BUTTON_COLOR_RED};
  &:hover {
    background: ${(props: { cardColor?: string }) =>
      props.cardColor === "gray"
        ? BUTTON_COLOR_HOVER_GRAY
        : BUTTON_COLOR_HOVER_RED};
  }
  width: ${cardWidthMobile};
  @media (min-width: ${BREAKPOINT}px) {
    display: none;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
`;

export default Card;
