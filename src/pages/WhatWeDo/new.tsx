import Callout from "../../components/Callout/callOut";
import BannerVideo from "../../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "../../styles/Constants";
import { dataWhatWeDo } from "./dataWhatWeDo";

const pageVideo = 766731362;

const WhatWeDoNewPage = () => {
  return (
    <>
      <BannerVideo
        pageTitle="Get where you need to go"
        pageDescription="(This page takes you to the Engagement terms, the actual Process workflow, how these fit with your Venture Stages, and optionally the subject areas of Technical, Clinical, Product/Market, Regulatory/Legal and Strategy/Business Dev)"
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

export default WhatWeDoNewPage;
