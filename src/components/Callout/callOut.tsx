import { CALLOUT_HEIGHT_PX, COLOR_TEXT, TEXT_OPACITY } from "../../styles/Constants";
import styled from "styled-components";
import Button from "../Button/button";
import TypeWriterEffect from "react-typewriter-effect";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const CalloutText = ({
  calloutTitle,
  calloutText,
  backgroundColor,
  textColor,
  buttonText,
  buttonTo,
  typing,
}) => {
  return (
    <>
      <CalloutTextWrapper
        style={{ background: backgroundColor && backgroundColor }}
      >
        <TextWrapper>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <CalloutTitle style={{ color: textColor && textColor }}>
              {calloutTitle}
            </CalloutTitle>
          </AnimationOnScroll>

          {typing ? (
            <TypeWriterParagraph
              textStyle={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 300,
                fontSize: "1.2em",
                lineHeight: "1.7em",
                color: COLOR_TEXT,
                opacity:TEXT_OPACITY
              }}
              startDelay={10}
              cursorColor={COLOR_TEXT}
              text={calloutText}
              typeSpeed={1}
            />
          ) : (
            <CalloutParagraph>{calloutText}</CalloutParagraph>
          )}

          <AnimationOnScroll animateIn="animate__fadeInUp" delay={2000}>
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
  padding: 50px 0;
  z-index: +1;
  height: auto;
  width: 60%;
  text-align: left;
`;

const CalloutTitle = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 100;
  font-size: 2em;
  margin-bottom: 0.8em;
  height: auto;
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
  opacity:${TEXT_OPACITY}
`;

const TypeWriterParagraph = styled(TypeWriterEffect)`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.3em;
  height: auto;
  text-align: left;
  opacity:${TEXT_OPACITY}
`;

export default CalloutText;
