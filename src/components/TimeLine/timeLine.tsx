import styled from "styled-components";
import TimeLineItem from "./timeLineItem";
import { dataTimeLine } from "../../data/timeLine";

const TimeLineLeft = () => {
  const timeLineMap = dataTimeLine
    .filter((u) => u.side == "left")
    .map((props) => (
      <TimeLineItem
        key={props.id}
        id={props.id}
        order={props.order}
        title={props.title}
        desc={props.desc}
        side={props.side}
      />
    ));
  return <>{timeLineMap}</>;
};

const TimeLineRight = () => {
  const timeLineMap = dataTimeLine
    .filter((u) => u.side !== "left")
    .map((props) => (
      <TimeLineItem
        key={props.id}
        id={props.id}
        order={props.order}
        title={props.title}
        desc={props.desc}
        side={props.side}
      />
    ));
  return (<>{timeLineMap}</>);
};

const TimeLine = () => (
  <>
    <TimeLineLeft />
    <TimeLineRight />
  </>
);

export default TimeLine;
