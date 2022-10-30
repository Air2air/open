import setBodyColor from "../utils/setBodyColor";
import { COLOR_BASE } from "../styles/Constants";
import TimeLine from "../components/TimeLine/timeLine";
import styled from "styled-components";
import BannerSpacer from "../components/BannerSpacer/bannerSpacer";

const TimeLinePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerSpacer />
      <TimeLineTitle>Health AI Venture stages</TimeLineTitle>
      <TimeLine />
    </>
  );
};

export default TimeLinePage;

const TimeLineTitle = styled.h2`
  margin-bottom: 0.8em;
  text-align: center;
`;
