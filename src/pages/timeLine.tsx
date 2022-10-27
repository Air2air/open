import setBodyColor from "../utils/setBodyColor";
import { COLOR_BASE, COLOR_BASE_TEXT } from "../styles/Constants";
import TimeLine from "../components/TimeLine/timeLine";
import styled from "styled-components";

const TimeLinePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <SpacerDiv />
      <TimeLineTitle>Startup Funding Stages</TimeLineTitle>
      <TimeLine />
    </>
  );
};

export default TimeLinePage;

const SpacerDiv = styled.div`
  height: 180px;
  width: 100vw;
`;

const TimeLineTitle = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  color: ${COLOR_BASE_TEXT};
  font-weight: 100;
  font-size: 2em;
  height: 40px;
  width: 100%;
  margin-bottom: 0.8em;
  text-align: center;
`;
