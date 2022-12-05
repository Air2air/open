import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import Callout from "components/Callout/callOut";
// import CallOutChart from "components/Callout/callOutChart";
import { dataCaseStudies } from "./dataCaseStudies";
// import { ICalloutProps } from "interfaces/callouts";

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

      {dataCaseStudies.map((props) => (
        <div key={props.id}>
          {/* <CallOutChart data={dataCaseStudies}/> */}
          <Callout {...props} />
        </div>
      ))}
    </>
  );
};

export default CaseStudiesPage;
