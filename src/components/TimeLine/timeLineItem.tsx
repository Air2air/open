import styled from "styled-components";
import {
  COLOR_BASE_3,
  COLOR_BASE_LIGHT,
  COLOR_BASE_TEXT,
  COLOR_TEXT,
} from "../../styles/Constants";
import parse from "html-react-parser";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const TimeLineItemLeft = ({ id, title, desc }) => {
  const descParsed = parse(desc);
  // const side  = ''

  return (
    <AnimationOnScroll key={id} animateIn="animate__fadeInLeft" delay={0}>
      <TimeLineItemWrapper>
        <TimeLineContent>
          <TimeLineItemTitle>{title}</TimeLineItemTitle>
          <TimeLineItemDesc>{descParsed}</TimeLineItemDesc>
        </TimeLineContent>
        <TimeLineItemLineBox>
          <div
            id={id}
            className="line animate__animated animate__slideInLeft animate__delay-1s"
          ></div>
        </TimeLineItemLineBox>
      </TimeLineItemWrapper>
    </AnimationOnScroll>
  );
};

export const TimeLineItemRight = ({ id, title, desc }) => {
  const descParsed = parse(desc);
  // const side  = ''

  return (
    <AnimationOnScroll key={id} animateIn="animate__fadeInRight" delay={0}>
      <TimeLineItemWrapper>
        <TimeLineItemLineBox>
          <div
            id={id}
            className="line animate__animated animate__slideInRight animate__delay-1s"
          ></div>
        </TimeLineItemLineBox>
        <TimeLineContent>
          <TimeLineItemTitle>{title}</TimeLineItemTitle>
          <TimeLineItemDesc>{descParsed}</TimeLineItemDesc>
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
  margin-bottom: 14px;
`;

const TimeLineContent = styled.div`
  z-index: +1;
  display: flex;
  flex-direction: column;
  height: auto;
  /* border: 2px solid ${COLOR_BASE_LIGHT}; */
  border-radius: 6px;
  width: 90%;
  padding: 32px;
  background: ${COLOR_BASE_3};
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

const TimeLineItemTitle = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.3em;
  color: ${COLOR_BASE_TEXT};
  margin-bottom: 1.2em;
  /* background: red; */
`;

const TimeLineItemDesc = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight:300;
  line-height: 1.6em;
  color: ${COLOR_TEXT};
`;
