import {
  BREAKPOINT,
  COLOR_WHITE,
  FONT_SUBHEAD_DESKTOP,
  FONT_SUBHEAD_MOBILE,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_SEMIBOLD,
} from "styles/Constants";
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
  color: ${(props) =>
    props.color === "" || !props.color ? COLOR_WHITE : props.color};
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_MOBILE}
  }
`;
