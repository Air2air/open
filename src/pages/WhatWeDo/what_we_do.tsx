import Callout from "./../../components/Callout/callout";
import BannerVideo from "./../../components/BannerVideo/bannerVideo";
import { COLOR_BASE} from "./../../styles/Constants";
import { dataWhatWeDo } from "./dataWhatWeDo";

const pageVideo = 766731362;


const WhatWeDoPage = () => {

  return (
    <>
      <BannerVideo
        pageTitle="We get you where you need to be"
        pageDescription="Eleven advises your healthcare AI startup in the areas of technical, clinical, product/market, regulatory/legal and strategy/bizdev.  We know where you need to be and how to get you there."
        pageVideo={pageVideo}
        overlayOpacity={0.3}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {dataWhatWeDo.map((props) => (
        <Callout
          id={props.id}
          title={props.title}
          text={props.text}
          backgroundColor={props.backgroundColor}
          buttonText={props.buttonText}
          buttonTo={props.buttonTo}
        />
      ))}
    </>
  );
};

export default WhatWeDoPage;
