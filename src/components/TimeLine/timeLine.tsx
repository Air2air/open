import {
  CALLOUT_HEIGHT_PX,
  COLOR_TEXT,
  TEXT_OPACITY,
} from "../../styles/Constants";
import styled from "styled-components";
import Button from "../Button/button";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";

interface ITimeLineTextProps {
  timeLineTitle: string;
  timeLineText: string;
  timeLineVideo?: string;
  backgroundColor: string;
  textColor: string;
  buttonText: string;
  buttonTo: string;
}

export const TimeLine = (props: ITimeLineTextProps) => {
  const {
    timeLineTitle,
    timeLineText,
    backgroundColor,
    textColor,
    buttonText,
    buttonTo,
  } = props;

  const timeLineTitleParsed = parse(timeLineTitle);
  const timeLineTextParsed = parse(timeLineText);

  return (
    <>
      <TimeLineTextWrapper
        style={{ background: backgroundColor && backgroundColor }}
      >
        <TextWrapper>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0}>
            <TimeLineTitle style={{ color: textColor && textColor }}>
              {timeLineTitleParsed}
            </TimeLineTitle>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeIn" delay={200}>
            <TimeLineParagraph>{timeLineTextParsed}</TimeLineParagraph>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp" delay={400}>
            {buttonText ? <Button to={buttonTo} text={buttonText} /> : ""}
          </AnimationOnScroll>
        </TextWrapper>
      </TimeLineTextWrapper>
    </>
  );
};

const TimeLineTextWrapper = styled.div`
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

const TimeLineTitle = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 100;
  font-size: 2em;
  margin-bottom: 0.8em;
  height: auto;
  text-align: left;
`;

const TimeLineParagraph = styled.div`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.7em;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
`;

export default TimeLine;
