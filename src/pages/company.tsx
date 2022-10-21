import CaseStudies from "../components/CaseStudies/caseStudies";
import Contact from "../components/Contact/contact";
import HomeBanner from "../components/HomeBanner/homeBanner";
import Investments from "../components/Investments/investments";
import Portfolio from "../components/Portfolio/portfolio";
import Vision from "../components/Vision/vision";

const title = `Home Tagline`;
const subtitle = `optional Subtitle about Eleven`;
const text = `Mission statement Mission statement Mission statement Mission statement
 Mission statement Mission statement Mission statement Mission statement`;
const CompanyPage = ({ nextPath, nextName, section }) => {
  return (
    <>
      <div id="main" className="all_colors" data-scroll-offset="88">
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
export default CompanyPage;
