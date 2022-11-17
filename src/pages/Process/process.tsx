import setBodyColor from "../../utils/setBodyColor";
import BannerVideo from "../../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "../../styles/Constants";
import CalloutBullet from "../../components/Callout/callOutBullet";
import { dataProcess } from "./dataProcess";

const pageVideo = 769227014;

const ProcessPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Solid process"
        pageDescription="Scope, deliver and measure.  Our healthcare AI workflow gets you to the right outcome."
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {dataProcess.map((props) => (
        <CalloutBullet
          id={props.id}
          calloutTitle={props.title}
          calloutText={props.text}
          backgroundColor={props.backgroundColor}
        />
      ))}
    </>
  );
};

export default ProcessPage;
