import {
  BREAKPOINT,
  COLOR_TEXT,
  FONT_BANNER_SUBHEAD_DESKTOP,
  FONT_BANNER_SUBHEAD_MOBILE,
  FONT_SUBHEAD_DESKTOP,
  FONT_SUBHEAD_MOBILE,
  FONT_WEIGHT_SEMIBOLD,
  TEXT_OPACITY,
} from "styles/Constants";
import styled from "styled-components";

type HeadingSubHeadProps = {
  text?: string;
  typing?: boolean;
};

export const HeadingSubHead = (props: HeadingSubHeadProps) => (
  <SubheadContainer className="animate__animated animate__fadeInUp animate__delay-500ms">
    <TypeWriterWrapper>{props.text}</TypeWriterWrapper>
  </SubheadContainer>
);

const SubheadContainer = styled.div`
  position: absolute;
  bottom: 0;
  text-align: left;
  width: 100%;
  height: 60%;
  /* background: red; */
`;

const TypeWriterWrapper = styled.div`
  color: ${COLOR_TEXT};
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
  /* text-shadow: 0 0 3px #000; */
  /* background: red; */
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_MOBILE}
  }
`;
