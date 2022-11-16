import setBodyColor from "../../utils/setBodyColor";
import BannerVideo from "../../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "../../styles/Constants";
import CalloutBullet from "../../components/Callout/callOutBullet";
import { dataEngagement } from "./dataEngagement";

const pageVideo = 769227014;

const engagementMap = dataEngagement.map((props) => (
  <CalloutBullet
    id={props.id}
    calloutTitle={props.title}
    calloutText={props.desc}
    backgroundColor={props.backgroundColor}
  />
));

const EngagementPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Engaging Eleven"
        pageDescription="Our engagement framework is easy to understand"
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {engagementMap}
    </>
  );
};

export default EngagementPage;
