import setBodyColor from "../utils/setBodyColor";
import { COLOR_BASE } from "../styles/Constants";
import TimeLine from "../components/TimeLine/timeLine";
import styled from "styled-components";


const TimeLinePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <SpacerDiv />
      <TimeLine />
    </>
  );
};

export default TimeLinePage;

const SpacerDiv = styled.div`
  height: 180px;
  width: 100vw;
`;
