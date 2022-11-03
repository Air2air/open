import setBodyColor from "../utils/setBodyColor";
import { COLOR_BASE } from "../styles/Constants";
import Engagement from "../components/Engagement/engagement";
import styled from "styled-components";
import BannerSpacer from "../components/BannerSpacer/bannerSpacer";

const EngagementPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerSpacer />
      <EngagementTitle>Engagement workflow</EngagementTitle>
      <Engagement />
    </>
  );
};

export default EngagementPage;

const EngagementTitle = styled.h2`
  margin-bottom: 0.8em;
  text-align: center;
`;
