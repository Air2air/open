import {
  BREAKPOINT,
  FONT_SUBHEAD_DESKTOP,
  FONT_SUBHEAD_MOBILE,
} from "styles/Constants";
import styled from "styled-components";

type TitleProps = {
  title?: string;
  color?: string;
};

export const TitleCallout = (props) => (
  <TitleContainer>
    <TitleStyled>{props.title}</TitleStyled>
  </TitleContainer>
);

const TitleContainer = styled.div`
  text-align: left;
  width: 100%;
  min-height: 50px;
  /* background: red; */
`;

const TitleStyled = styled.div<TitleProps>`
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_MOBILE}
  }
`;
