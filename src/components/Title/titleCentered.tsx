import { BREAKPOINT_PX, COLOR_RED } from "styles/Constants";
import styled from "styled-components";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import { FC } from "react";

type TitleProps = {
  title?: any;
  color?: any;
};
/*
export const TitleCentered: FC<TitleProps> = (props) => (
  <TitleContainer animateIn="animate__fadeIn" delay={400}>
    <TitleStyled color={props.color}>{props.title}</TitleStyled>
  </TitleContainer>
);
*/

export const TitleCentered: FC<TitleProps> = (props) => (
  <TitleContainer>
    <TitleStyled color={props.color}>{props.title}</TitleStyled>
  </TitleContainer>
);


const TitleContainer = styled.div`
  text-align: center;
  width: 100%;
`;

const TitleStyled = styled.h1<TitleProps> `
  margin: 0 auto 10px auto;
  text-align: center;
  font-weight: 300;
  color: ${(props) =>
    props.color === "" || !props.color ? COLOR_RED : props.color};
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 2.4em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1.7em;
  }
`;
