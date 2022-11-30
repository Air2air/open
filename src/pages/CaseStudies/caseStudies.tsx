import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import Callout from "components/Callout/callOut";
import { dataCaseStudies } from "./dataCaseStudies";
import { ICalloutProps } from "api/interfaces";

const pageVideo = 776446335;

const CaseStudiesPage = () => {
  return (
    <>
      <BannerVideo
        title="Case Studies"
        text="Examples from Elevens' 100-plus years of experience"
        pageVideo={pageVideo}
        color="#ffffff"
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {dataCaseStudies.map((props: ICalloutProps) => (
        <Callout
          key={props.id}
          id={props.id}
          title={props.title}
          text={props.text}
          backgroundColor={props.backgroundColor}
          buttonTo={props.buttonTo}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
        />
      ))}
    </>
  );
};

export default CaseStudiesPage;
