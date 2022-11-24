import styled from "styled-components";
import {
  BREAKPOINT_PX,
  COLOR_BASE_3,
  COLOR_BASE_LIGHT,
  COLOR_RED,
  COLOR_TEXT,
} from "styles/Constants";
import parse from "html-react-parser";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ITimeLineProps } from "./../../api/interfaces";

export const TimeLineItemCombined = (props: ITimeLineProps) => {
  const textParsed = parse(props.text);
  return (
    // <AnimationOnScroll
    //   key={props.id}
    //   animateIn="animate__fadeInUp"
    //   offset={150}
    // >
    <TimeLineItemWrapper>
      <TimeLineContent>
        <TimeLineTitle>{props.title}</TimeLineTitle>
        <TimeLineItemDesc>{textParsed}</TimeLineItemDesc>
      </TimeLineContent>
    </TimeLineItemWrapper>
    // </AnimationOnScroll>
  );
};

export const TimeLineItemLeft = (props: ITimeLineProps) => {
  const textParsed = parse(props.text);
  // const side  = ''

  return (
    <AnimationOnScroll key={props.id} animateIn="animate__fadeInLeft" delay={0}>
      <TimeLineItemWrapper>
        <TimeLineContent>
          <TimeLineTitle>{props.title}</TimeLineTitle>
          <TimeLineItemDesc>{textParsed}</TimeLineItemDesc>
        </TimeLineContent>
        <TimeLineItemLineBox>
          <div
            id={props.id}
            className="line animate__animated animate__slideInLeft animate__delay-1s"
          ></div>
        </TimeLineItemLineBox>
      </TimeLineItemWrapper>
    </AnimationOnScroll>
  );
};

export const TimeLineItemRight = (props: ITimeLineProps) => {
  const textParsed = parse(props.text);
  // const side  = ''

  return (
    <AnimationOnScroll
      key={props.id}
      animateIn="animate__fadeInRight"
      delay={0}
    >
      <TimeLineItemWrapper>
        <TimeLineItemLineBox>
          <div
            id={props.id}
            className="line animate__animated animate__slideInRight animate__delay-1s"
          ></div>
        </TimeLineItemLineBox>
        <TimeLineContent>
          <TimeLineTitle>{props.title}</TimeLineTitle>
          <TimeLineItemDesc>{textParsed}</TimeLineItemDesc>
        </TimeLineContent>
      </TimeLineItemWrapper>
    </AnimationOnScroll>
  );
};

const TimeLineItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  margin-top: 14px;
  @media (min-width: ${BREAKPOINT_PX}) {
    margin: 14px 0;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
  }
`;

const TimeLineTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
  color: ${(props) =>
    props.color === "" || !props.color ? COLOR_RED : props.color};
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 1.3em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1.1em;
  }
`;

const TimeLineContent = styled.div`
  /* z-index: +1; */
  display: flex;
  flex-direction: column;
  height: auto;
  border-radius: 6px;
  background: ${COLOR_BASE_3};
  @media (min-width: ${BREAKPOINT_PX}) {
    width: 90%;
    padding: 30px;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    width: 100%;
    padding: 30px;
  }
  /* background: green; */
`;

const TimeLineItemDesc = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 1.6em;
  height: auto;
  color: ${COLOR_TEXT};
  /* background: gold; ; */
`;

const TimeLineItemLineBox = styled.div`
  height: auto;
  width: 10%;
  display: flex;
  align-items: flex-end;
  .line {
    height: 50%;
    width: 100%;
    border-top: 2px solid ${COLOR_BASE_LIGHT};
    /* opacity: 0; */
  }
`;
