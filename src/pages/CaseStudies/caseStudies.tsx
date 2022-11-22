import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import CalloutBullet from "components/Callout/callOutBullet";
import { dataCaseStudies } from "./dataCaseStudies";
import { ICalloutBulletProps } from "api/interfaces";

const pageVideo = 766650761;

const CaseStudiesPage = () => {
  return (
    <>
      <BannerVideo
        pageTitle="Case Studies"
        pageDescription="(Summary of the case studies below represent, and whatever other meta data)"
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {dataCaseStudies.map((props:ICalloutBulletProps) => (
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

export default CaseStudiesPage;
