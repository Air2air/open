import BannerVideo from "./../../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "constants/index";
import CalloutBullet from "../../components/Callout/callOutBullet";
import { dataProcess } from "./dataProcess";

const pageVideo = 769227014;

const ProcessPage = () => {
  return (
    <>
      <BannerVideo
        title="Process workflow"
        text="(This page lists the steps in the process.  We can have whatever # of steps of course.  There is placeholder text for now.)"
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {dataProcess.map((props) => (
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

export default ProcessPage;
