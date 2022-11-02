import { BREAKPOINT_PX } from "../../styles/Constants";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FC } from "react";

type TitleProps = {
  titleText?: any;
};

export const TitleCallout: FC<TitleProps> = ({ titleText }) => (
  <AnimationOnScroll animateIn="animate__fadeIn" delay={400}>
    <TitleStyled>{titleText}</TitleStyled>
  </AnimationOnScroll>
);

export const TitleStyled = styled.h1`
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 2.1em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1.5em;
  }
`;
