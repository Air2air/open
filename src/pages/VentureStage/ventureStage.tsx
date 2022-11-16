import setBodyColor from "../../utils/setBodyColor";
import { COLOR_BASE } from "../../styles/Constants";
import TimeLine from "../../components/TimeLine/timeLine";
import styled from "styled-components";
import BannerSpacer from "../../components/BannerSpacer/bannerSpacer";
import { dataVentureStage } from "./dataVentureStage";

const VentureStagePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerSpacer />
      <VentureStageTitle>Health AI Venture stage</VentureStageTitle>
      <TimeLine data={dataVentureStage} />
    </>
  );
};

export default VentureStagePage;

const VentureStageTitle = styled.h2`
  margin-bottom: 0.8em;
  text-align: center;
`;
