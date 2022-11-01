import styled from "styled-components";
import { TimeLineItemLeft, TimeLineItemRight } from "./timeLineItem";
import { dataTimeLine } from "../../data/timeLine";
import {
  COLOR_BASE_LIGHT,
  CONTENT_WIDTH_DESKTOP,
} from "../../styles/Constants";

const TimeLineLeft = () => {
  const timeLineMap = dataTimeLine
    .filter((u) => u.side !== "left")
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
    .filter((u) => u.side === "left")
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

const TimeLine = () => (
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

export default TimeLine;

const TimeLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: ${CONTENT_WIDTH_DESKTOP};
  margin: 0 auto;
`;

const TimeLineItemColumn = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: space-around;
`;
