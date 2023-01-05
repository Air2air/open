import { BREAKPOINT, COLOR_RED } from "styles/Constants";
import styled from "styled-components";
import { FC } from "react";

type TitleProps = {
  title?: any;
  color?: any;
};

export const TitleCentered: FC<TitleProps> = (props) => (
  <TitleContainer>
    <TitleStyled color={props.color}>{props.title}</TitleStyled>
  </TitleContainer>
);

const TitleContainer = styled.div`
  text-align: center;
  width: 100%;
`;

const TitleStyled = styled.h1<TitleProps>`
  margin: 0 auto 10px auto;
  text-align: center;
    color: ${(props) =>
    props.color === "" || !props.color ? COLOR_RED : props.color};
  @media (min-width: ${BREAKPOINT}px) {
    font-size: 2.4em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 1.7em;
  }
`;
