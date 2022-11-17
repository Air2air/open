import { BREAKPOINT_PX } from "../../styles/Constants";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FC } from "react";

type TitleProps = {
  title: string;
};

export const TitleCallout: FC<TitleProps> = (props) => (
  // export const TitleCallout = (props : TitleProps): JSX.Element => {
  <TitleContainer animateIn="animate__fadeIn" delay={400}>
    <TitleStyled>{props.title}</TitleStyled>
  </TitleContainer>
);

const TitleContainer = styled(AnimationOnScroll)`
  text-align: left;
  width: 100%;
`;

const TitleStyled = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 1.6em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1.4em;
  }
`;
