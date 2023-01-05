
import {
  BREAKPOINT,
  COLOR_WHITE,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  TEXT_TITLE_DESKTOP,
  TEXT_TITLE_MOBILE,
} from "styles/Constants";
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
  position: absolute;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
    top: 40%;
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
    top: 50%;
  }
  /* background: red; */
`;

const TitleStyled = styled.h1<TitleProps>`
  color: ${(props) =>
    props.color === "" || !props.color ? COLOR_WHITE : props.color};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${BREAKPOINT}px) {
    font-size: ${TEXT_TITLE_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: ${TEXT_TITLE_MOBILE};
    line-height: 1.3em;
  }
`;
