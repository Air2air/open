import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_HEADING_DESKTOP,
  FONT_HEADING_MOBILE,
} from "styles/Constants";
import styled from "styled-components";

type TitleProps = {
  title?: string;
  color?: string;
};

export const TitleHeading = (props: TitleProps) => {
  return props.title !== "" ? (
    <TitleContainer className="animate__animated animate__fadeInDown animate__delay-0s">
      <TitleStyled>{props.title}</TitleStyled>
    </TitleContainer>
  ) : null;
};

const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  text-align: left;
  height: 40%;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: blue; */
`;

const TitleStyled = styled.div<TitleProps>`
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_HEADING_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_HEADING_MOBILE}
  }
`;
