import CaseStudies from "../components/CaseStudies/caseStudies";
import Contact from "../components/Contact/contact";
import HomeBanner from "../components/HomeBanner/homeBanner";
import Investments from "../components/Investments/investments";
import Portfolio from "../components/Portfolio/portfolio";
import VideoCallout from "../components/VideoCallout/videoCallout";
import Vision from "../components/Vision/vision";


const HomePage = ({ nextPath, nextName, section }) => {
 return (
  <>
   <div id="main" className="all_colors" data-scroll-offset="88">
    <VideoCallout />
    <HomeBanner />
    <Vision />
    <Investments />
    <Portfolio />
    <CaseStudies />
    <Contact />
   </div>
  </>
 );
};
export default HomePage;
