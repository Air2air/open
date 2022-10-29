import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_TEXT,
} from "../styles/Constants";

const pageVideo = 765129157;
/*











*/

const ApproachPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="What we do for you"
        pageDescription="With over 100 years of combined real-world experience, Eleven leverages a large multi-disciplinary team of industry-leading specialists to deliver across your healthcare AI needs."
        pageVideo={pageVideo}
        overlayOpacity={0.3}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="Product/Market fit"
        calloutText="We understand your <b>healthcare customer</b> - from payers and providers to academia and pharma.  We'll <b>advise</b> you on:
        <ul>
        <li>Segment landscape, needs, and priorities to drive adoption</li>
        <li>Go-to-market, product positioning, price point for clinical machine learning and digital health solutions. </li>
        <li>Support for academic initiatives and activities including grants, publications, and collaborations.</li>
        </li>
        <li>Deep technical and clinical support for broader consumer health sector landscape (e.g., patient engagement, wearables, digital health and wellness)</li></ul>"
        backgroundColor={COLOR_BASE_1}
        textColor={COLOR_BASE_TEXT}
        buttonText="Health AI Markets"
        buttonTo="/markets"
      />
      <Callout
        calloutTitle="Financial"
        calloutText="
        From Seed to IPO Eleven shepherds your <b>portfolio companies</b> through the challenging health vertical.  
        <ul>
        <li>Strategic investments and structuring corporate vehicles (e.g., corporate venture capital, or CVC).</li>
        <li>Growth guidance including market segment, therapeutic area or disease category from competitive, partnering or investment perspectives.</li>  <li>Multidisciplinary fundraising, positioning vision, strategy and business model for digital health and digital medicine.</li>
        <li>M &amp; A commercial due diligence, including market assessment, evaluation of the competitive landscape, and analysis of the target's value proposition and post-acquisition growth strategy.</li>
        </ul>
        "
        backgroundColor={COLOR_BASE_2}
        textColor={COLOR_BASE_TEXT}
        buttonText="Health AI startup stages"
        buttonTo="/timeline"
      />
    </>
  );
};

export default ApproachPage;
