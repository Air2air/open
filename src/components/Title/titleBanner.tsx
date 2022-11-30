import { BREAKPOINT, COLOR_WHITE } from "styles/Constants";
import styled from "styled-components";

type TitleProps = {
  title?: any;
  color?: string;
};

export const TitleBanner = (props: TitleProps) => {
  return props.title !== "" ? (
    <TitleContainer>
      <TitleStyled color={props.color}>{props.title}</TitleStyled>
    </TitleContainer>
  ) : null;
};

const TitleContainer = styled.div`
  text-align: left;
  width: 100%;
  /* background: red; */
`;

const TitleStyled = styled.h1<TitleProps>`
  color: ${(props) =>
    props.color === "" || !props.color ? COLOR_WHITE : props.color};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${BREAKPOINT}px) {
    font-size: 2.3em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 1.5em;
    line-height: 1.3em;
  }
`;
