import setBodyColor from "../utils/setBodyColor";
import { COLOR_BASE } from "../styles/Constants";
import VentureStage from "../components/VentureStage/ventureStage";
import styled from "styled-components";
import BannerSpacer from "../components/BannerSpacer/bannerSpacer";

const VentureStagePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerSpacer />
      <VentureStageTitle>Health AI Venture stage</VentureStageTitle>
      <VentureStage />
    </>
  );
};

export default VentureStagePage;

const VentureStageTitle = styled.h2`
  margin-bottom: 0.8em;
  text-align: center;
`;
