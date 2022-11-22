import styled from "styled-components";
import {
  TimeLineItemCombined,
  TimeLineItemLeft,
  TimeLineItemRight,
} from "./timeLineItem";
import {
  BREAKPOINT,
  COLOR_BASE_LIGHT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "./../../styles/Constants";
import { useState, useEffect } from "react";
import { ITimeLineProps } from "./../../api/interfaces";

const TimeLine = (props: ITimeLineProps) => {
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
          <TimeLineContainerDesktop>
            <TimeLineItemColumn
              style={{ borderRight: `2px solid ${COLOR_BASE_LIGHT}` }}
            >
              <TimeLineLeft data={props.data} />
            </TimeLineItemColumn>
            <TimeLineItemColumn style={{ marginTop: "40px" }}>
              <TimeLineRight data={props.data} />
            </TimeLineItemColumn>
          </TimeLineContainerDesktop>
        </>
      ) : (
        <>
          <TimeLineContainerMobile>
            <TimeLineCombined data={props.data} />
          </TimeLineContainerMobile>
        </>
      )}
    </>
  );
};

const TimeLineLeft = (props: { data: any[] }) => {
  const timeLineMap = props.data
    .filter((u) => u.side === "left")
    .map((props) => (
      <TimeLineItemLeft
        key={props.id}
        id={props.id}
        title={props.title}
        text={props.text}
        color={props.color}
      />
    ));
  return <>{timeLineMap}</>;
};

const TimeLineRight = (props: { data: any[] }) => {
  const timeLineMap = props.data
    .filter((u) => u.side !== "left")
    .map((props) => (
      <TimeLineItemRight
        key={props.id}
        id={props.id}
        title={props.title}
        text={props.text}
        color={props.color}
      />
    ));
  return <>{timeLineMap}</>;
};

const TimeLineCombined = (props: { data: any[] }) => {
  const timeLineMap = props.data.map((props) => (
    <TimeLineItemCombined
      key={props.id}
      id={props.id}
      title={props.title}
      text={props.text}
      color={props.color}
      backgroundColor={props.backgroundColor}
    />
  ));
  return <>{timeLineMap}</>;
};

const TimeLineContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: ${CONTENT_WIDTH_DESKTOP};
`;

const TimeLineContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${CONTENT_WIDTH_MOBILE};
`;

const TimeLineItemColumn = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default TimeLine;
