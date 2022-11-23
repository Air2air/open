import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import CalloutBullet from "components/Callout/callOutBullet";
import { dataCaseStudies } from "./dataCaseStudies";
import { ICalloutBulletProps } from "api/interfaces";

const pageVideo = 766646401;

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
