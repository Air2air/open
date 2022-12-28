import {
  BREAKPOINT,
  CALLOUT_HEIGHT,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  TEXT_OPACITY,
} from "constants/index";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";
import { TitleCallout } from "components/Title/titleCallout";
import { ICalloutProps } from "interfaces/callouts";

export const Callout = (props: ICalloutProps) => {
  const textParsed = parse(props.text);

  return (
    <>
      <CalloutContainer style={{ background: props.backgroundColor }}>
        <TextSection>
          <TitleCallout title={props.title} color={props.color} />
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={100}
            offset={60}
          >
            <CalloutParagraph>{textParsed}</CalloutParagraph>
          </AnimationOnScroll>
        </TextSection>
      </CalloutContainer>
    </>
  );
};

const CalloutContainer = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  min-height: ${CALLOUT_HEIGHT}px;
`;

const TextSection = styled.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 70px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 20px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;

const CalloutParagraph = styled.div`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
  padding-bottom: 20px;
  @media (min-width: ${BREAKPOINT}px) {
    font-size: 1.3em;
    line-height: 1.7em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 1.1em;
    line-height: 1.7em;
  }
`;

export default Callout;
