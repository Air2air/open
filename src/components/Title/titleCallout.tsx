import { BREAKPOINT_PX, COLOR_RED } from "styles/Constants";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FC } from "react";

type TitleProps = {
  title?: string;
  color?: string;
};

export const TitleCallout: FC<TitleProps> = (props) => (
<TitleContainer animateIn="animate__fadeIn" delay={400}>
    <TitleStyled color={props.color}>{props.title}</TitleStyled>
  </TitleContainer>
);

const TitleContainer = styled(AnimationOnScroll)`
  text-align: left;
  width: 100%;
`;

const TitleStyled = styled.h1<TitleProps> `
  text-transform: uppercase;
  font-weight: 500;
  color: ${(props) =>
    props.color === "" || !props.color ? COLOR_RED : props.color};
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 1.6em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1.4em;
  }
`;

