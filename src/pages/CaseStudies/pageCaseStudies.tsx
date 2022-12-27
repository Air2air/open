import BannerVideo from "components/BannerVideo/videoBanner";
import { COLOR_BASE } from "constants/index";
import Callout from "components/Callout/callOut";
import { dataCaseStudies } from "./dataCaseStudies";
import ChartCaseStudies from "components/Chart/CaseStudies/chartCaseStudies";

const CaseStudiesPage = () => {
  return (
    <>
      <BannerVideo
        text="casestudies"
        pageVideo={776446335}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {dataCaseStudies.map((props, index) => (
        <div key={index}>
          <ChartCaseStudies data={props.practiceArea} backgroundColor={2} />
          <Callout {...props} />
        </div>
      ))}
    </>
  );
};

export default CaseStudiesPage;
