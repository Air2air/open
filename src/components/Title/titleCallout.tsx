import {
  BREAKPOINT,
  FONT_SUBHEAD_DESKTOP,
  FONT_SUBHEAD_MOBILE,
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
  min-height: 50px;
  /* background: red; */
`;

const TitleStyled = styled.h3<TitleProps>`
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_MOBILE}
  }
`;
