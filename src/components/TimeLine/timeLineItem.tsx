import styled from "styled-components";
import {
  COLOR_BASE_2,
  COLOR_BASE_TEXT,
  COLOR_TEXT,
  TEAM_MEMBER_HEIGHT_PX,
  TEAM_MEMBER_PHOTO_PX,
  TEAM_MEMBER_WIDTH_PX,
} from "../../styles/Constants";

const TimeLineItem = ({ id, order, title, desc, side }) => {
  // const imgsrc = "/images/about/" + photo;

  return (
    <TimeLineItemWrapper key={id}>
      <TimeLineItemTitle>{title}</TimeLineItemTitle>
      <TimeLineItemDesc>{desc}</TimeLineItemDesc>
    </TimeLineItemWrapper>
  );
};

const TimeLineItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background: gold;
`;

const TimeLineItemTitle = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.3em;
  color: ${COLOR_BASE_TEXT};
  display: flex;
  /* background: red; */
`;

const TimeLineItemDesc = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 0.9em;
  color: ${COLOR_TEXT};
  display: flex;
  /* background: blue; */
`;

export default TimeLineItem;
