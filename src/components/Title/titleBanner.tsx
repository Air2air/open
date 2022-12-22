import { BREAKPOINT, COLOR_WHITE } from "constants/index";
import styled from "styled-components";

type TitleProps = {
  title?: string;
  color?: string;
};

export const TitleBanner = (props: TitleProps) => {
  return props.title !== "" ? (
    <TitleContainer className="animate__animated animate__fadeInDown animate__delay-0s">
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
