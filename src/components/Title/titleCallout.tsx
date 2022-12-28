import { BREAKPOINT, COLOR_WHITE } from "constants/index";
import styled from "styled-components";
import { FC } from "react";

type TitleProps = {
  title?: string;
  color?: string;
};

export const TitleCallout: FC<TitleProps> = (props) => (
  <TitleContainer>
    <TitleStyled color={props.color}>{props.title}</TitleStyled>
  </TitleContainer>
);

const TitleContainer = styled.div`
  text-align: left;
  width: 100%;
`;

const TitleStyled = styled.h3<TitleProps>`
  text-transform: uppercase;
  color: ${(props) =>
    props.color === "" || !props.color ? COLOR_WHITE : props.color};
  @media (min-width: ${BREAKPOINT}px) {
    font-size: 1.6em;
    font-weight: 400;
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 1.3em;
    font-weight: 500;
  }
`;
