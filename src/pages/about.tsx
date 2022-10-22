
import Callout from "../components/Callout/callout";
import CaseStudies from "../components/CaseStudies/caseStudies";
import PhotoCallout from "../components/PhotoCallout/photoCallout";
import ProcessCarousel from "../components/ProcessCarousel/processCarousel";
import Vision from "../components/Vision/vision";
import WhyCarousel from "../components/WhyCarousel/whyCarousel";

const AboutPage = ({ nextPath, nextName, section }) => {
 return (
  <>
   <div id="main" className="all_colors" data-scroll-offset="88">
    <Callout />
    <CaseStudies />
    <PhotoCallout />
    <ProcessCarousel />
    <Vision />
    <WhyCarousel />
   </div>
  </>
 );
};
export default AboutPage;
