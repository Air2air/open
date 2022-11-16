import setBodyColor from "../../utils/setBodyColor";
import Callout from "../../components/Callout/callOut";
import BannerVideo from "../../components/BannerVideo/bannerVideo";
import { COLOR_BASE} from "../../styles/Constants";
import { dataWhatWeDo } from "./dataWhatWeDo";

const pageVideo = 766731362;

const WhatWeDoPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="What we do for you"
        pageDescription="Eleven leverages a large multi-disciplinary advisory of industry-leading specialists to deliver across your healthcare AI needs"
        pageVideo={pageVideo}
        overlayOpacity={0.3}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {dataWhatWeDo.map((props) => (
        <Callout
          id={props.id}
          calloutTitle={props.title}
          calloutText={props.desc}
          backgroundColor={props.backgroundColor}
          buttonText={props.buttonText}
          buttonTo={props.buttonTo}
        />
      ))}
    </>
  );
};

export default WhatWeDoPage;
