import {
  BREAKPOINT_PX,
  CALLOUT_HEIGHT_PX,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
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
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={30}>
            <h2 style={{ color: textColor && textColor }}>
              {calloutTitleParsed}
            </h2>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeIn" delay={200} offset={60}>
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

  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT_PX}) {
    padding: 70px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    padding: 40px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
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
  padding-bottom: 14px;
`;

export default Callout;
