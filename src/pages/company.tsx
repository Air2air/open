import CaseStudies from "../components/CaseStudies/caseStudies";
import Contact from "../components/Contact/contact";
import HomeBanner from "../components/PageBanner/pageBanner";
import Investments from "../components/Investments/investments";
import Portfolio from "../components/Portfolio/portfolio";
import Vision from "../components/Vision/vision";


const CompanyPage = ({ nextPath, nextName, section }) => {
 return (
  <>
   <div id="main" className="all_colors" data-scroll-offset="88">
    <Vision />
    <Investments />
    <Portfolio />
    <CaseStudies />
    <Contact />
   </div>
  </>
 );
};
export default CompanyPage;
