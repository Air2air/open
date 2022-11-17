import BannerVideo from "./../../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "./../../styles/Constants";
import CalloutBullet from "./../../components/Callout/calloutBullet";
import { dataEngagement } from "./dataEngagement";

const pageVideo = 769227014;

const EngagementPage = () => {

  return (
    <>
      <BannerVideo
        pageTitle="Engaging Eleven"
        pageDescription="(This page describes our engagement policies, from Matt's steps below.  The 'process' page details workflow, milestones and measurement.)"
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {dataEngagement.map((props) => (
        <CalloutBullet
          id={props.id}
          title={props.title}
          text={props.text}
          backgroundColor={props.backgroundColor}
        />
      ))}
    </>
  );
};

export default EngagementPage;
