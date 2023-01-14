import { BREAKPOINT, COLOR_RED } from "styles/Constants";
import styled from "styled-components";

export const TitleCentered = (props) => (
  <TitleContainer>
    <TitleStyled>{props.title}</TitleStyled>
  </TitleContainer>
);

const TitleContainer = styled.div`
  text-align: center;
  width: 100%;
`;

const TitleStyled = styled.h1`
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
