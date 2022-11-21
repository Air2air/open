import BannerVideo from "../../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "../../styles/Constants";
import CalloutBullet from "../../components/Callout/callOutBullet";
import { dataCaseStudies } from "./dataCaseStudies";

const pageVideo = 766650761;

const CaseStudiesPage = () => {
  return (
    <>
      <BannerVideo
        pageTitle="Case Studies workflow"
        pageDescription="(This page lists the steps in the process.  We can have whatever # of steps of course.  There is placeholder text for now.)"
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {dataCaseStudies.map((props) => (
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
