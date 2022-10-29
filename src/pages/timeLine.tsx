import setBodyColor from "../utils/setBodyColor";
import { COLOR_BASE} from "../styles/Constants";
import TimeLine from "../components/TimeLine/timeLine";
import styled from "styled-components";

const TimeLinePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <SpacerDiv />
      <TimeLineTitle>Health AI startup stages</TimeLineTitle>
      <TimeLine />
    </>
  );
};

export default TimeLinePage;

const SpacerDiv = styled.div`
  height: 180px;
  width: 100vw;
`;

const TimeLineTitle = styled.h2`
  margin-bottom: 0.8em;
  text-align: center;
`;
