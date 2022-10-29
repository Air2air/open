import {
  CALLOUT_HEIGHT_PX,
  COLOR_TEXT,
  CONTENT_WIDTH,
  TEXT_OPACITY,
} from "../../styles/Constants";
import styled from "styled-components";
import Button from "../Button/button";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";

interface ICalloutTextProps {
  calloutTitle: string;
  calloutText: string;
  calloutVideo?: string;
  backgroundColor: string;
  textColor: string;
  buttonText: string;
  buttonTo: string;
}

export const Callout = (props: ICalloutTextProps) => {
  const {
    calloutTitle,
    calloutText,
    backgroundColor,
    textColor,
    buttonText,
    buttonTo,
  } = props;

  const calloutTitleParsed = parse(calloutTitle);
  const calloutTextParsed = parse(calloutText);

  return (
    <>
      <CalloutTextWrapper
        style={{ background: backgroundColor && backgroundColor }}
      >
        <TextWrapper>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0}>
            <h2 style={{ color: textColor && textColor }}>
              {calloutTitleParsed}
            </h2>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeIn" delay={200}>
            <CalloutParagraph>{calloutTextParsed}</CalloutParagraph>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0}>
            {buttonText ? <Button to={buttonTo} text={buttonText} /> : ""}
          </AnimationOnScroll>
        </TextWrapper>
      </CalloutTextWrapper>
    </>
  );
};

const CalloutTextWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  min-height: ${CALLOUT_HEIGHT_PX};
`;

const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 70px 0;
  z-index: +1;
  height: auto;
  width: ${CONTENT_WIDTH};
  text-align: left;
`;

const CalloutParagraph = styled.div`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.7em;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
`;

export default Callout;
