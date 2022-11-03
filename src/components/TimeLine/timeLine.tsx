import styled from "styled-components";
import { TimeLineItemLeft, TimeLineItemRight } from "./timeLineItem";
import { dataTimeLine } from "../../data/timeLine";
import {
  BREAKPOINT,
  BREAKPOINT_PX,
  COLOR_BASE_LIGHT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "../../styles/Constants";
import { useState, useEffect } from "react";

const TimeLineDesktop = () => (
  <>
    <TimeLineWrapper>
      <TimeLineItemColumn
        style={{ borderRight: `2px solid ${COLOR_BASE_LIGHT}` }}
      >
        <TimeLineLeft />
      </TimeLineItemColumn>
      <TimeLineItemColumn style={{ marginTop: "40px" }}>
        <TimeLineRight />
      </TimeLineItemColumn>
    </TimeLineWrapper>
  </>
);

const TimeLineMobile = () => (
  <>
    <TimeLineWrapper>
      <TimeLineItemColumn
        style={{ borderRight: `2px solid ${COLOR_BASE_LIGHT}` }}
      >
        <TimeLineLeft />
        {/* </TimeLineItemColumn>
      <TimeLineItemColumn style={{ marginTop: "40px" }}>
        <TimeLineRight />*/}
      </TimeLineItemColumn>
    </TimeLineWrapper>
  </>
);

const TimeLine = () => {
  /*------ Responsive -------*/
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      {width > BREAKPOINT ? (
        <>
          <TimeLineWrapper>
            <TimeLineItemColumn
              style={{ borderRight: `2px solid ${COLOR_BASE_LIGHT}` }}
            >
              <TimeLineLeft />
            </TimeLineItemColumn>
            <TimeLineItemColumn style={{ marginTop: "40px" }}>
              <TimeLineRight />
            </TimeLineItemColumn>
          </TimeLineWrapper>
        </>
      ) : (
        TimeLineMobile
      )}
    </>
  );
};

const TimeLineLeft = () => {
  const timeLineMap = dataTimeLine
    .filter((u) => u.side === "left")
    .map((props) => (
      <TimeLineItemLeft
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{timeLineMap}</>;
};

const TimeLineRight = () => {
  const timeLineMap = dataTimeLine
    .filter((u) => u.side !== "left")
    .map((props) => (
      <TimeLineItemRight
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{timeLineMap}</>;
};

const TimeLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  @media (min-width: ${BREAKPOINT_PX}) {
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;

const TimeLineItemColumn = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default TimeLine;
