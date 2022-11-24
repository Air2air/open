import { BREAKPOINT_PX, COLOR_WHITE } from "styles/Constants";
import styled from "styled-components";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import { FC } from "react";

type TitleProps = {
  title?: any;
  color?: string;
};

/*
export const TitleBanner: FC<TitleProps> = (props) => (
  <TitleContainer animateIn="animate__fadeIn" delay={0}>
    <TitleStyled color={props.color}>{props.title}</TitleStyled>
  </TitleContainer>
);
*/

export const TitleBanner: FC<TitleProps> = (props) => (
  <TitleContainer>
    <TitleStyled color={props.color}>{props.title}</TitleStyled>
  </TitleContainer>
);

const TitleContainer = styled.div`
  text-align: left;
  width: 100%;
`;

const TitleStyled = styled.h1<TitleProps>`
  color: ${(props) =>
    props.color === "" || !props.color ? COLOR_WHITE : props.color};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 2.4em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1.7em;
  }
`;
