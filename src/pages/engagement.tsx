import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { COLOR_BASE, COLOR_BASE_1 } from "../styles/Constants";
import Engagement from "../components/Engagement/engagement";

const pageVideo = 769143399;

const EngagementPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Solid process "
        pageDescription="Scope, deliver and measure.  Our healthcare AI workflow gets you to the right outcome."
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Engagement />
    </>
  );
};

export default EngagementPage;
