import setBodyColor from "../utils/setBodyColor";
import BannerVideo from "../components/BannerVideo/bannerVideo";
// import About from "../components/About/about";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_TEXT,
} from "../styles/Constants";
import { Callout } from "../components/Callout/callOut";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/YqGSkmb/videoblocks-0001_b968rdswd__7c3bff625f26e0abd93eaf6b0611910b__P720.mp4";

const AboutPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Elevens"
        pageDescription="If you know your industry, then you already know the Elevens."
        pageVideo={pageVideo}
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle=""
        calloutText="<p>Eleven was created when three fold eleven of the foremost AI and medical minds on the planet came together to accelerate breakthrough ventures in health-tech, med-tech, bio-tech, and pharma-tech. These experts are the leaders in AI technologies and business in medicine, healthcare, bioscience, and pharmaceutical science, and all share a mission to deliver the most fundamental advancements in the Modern Age.</p><p> 
Eleven is a team of experienced healthcare and clinical machine learning leaders from leading academic medical centers, venture capital, large technology companies, and successful digital health startups. With over 100 years of combined real-world experience, Eleven leverages a large multi-disciplinary team of industry-leading specialists to deliver across a wide range of customer needs in areas such as:
</p>
<ul>
<li>Understanding the healthcare customer (payers, providers, pharma, etc) landscape, needs, and priorities to drive adoption</li>
<li>Strategic investments and structuring corporate vehicles (e.g., corporate venture capital, or CVC).</li>
<li>Go-to-market, product positioning, price point for clinical machine learning and digital health solutions.</li> 
<li>Commercial due diligence, including market assessment, evaluation of the competitive landscape, and analysis of the target’s value proposition and post-acquisition growth strategy.</li>
<li>Multidisciplinary fundraising positioning vision, strategy and business model for digital health and digital medicine. </li>
<li>Support for academic initiatives and activities including grants, publications, and collaborations.</li>
<li>Deep technical and clinical support for broader consumer health sector landscape (e.g., patient engagement, wearables, digital health and wellness)</li>
<li>Strategic growth guidance including market segment, therapeutic area or disease category from competitive, partnering or investment perspectives.</li>
</ul>

        "
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default AboutPage;
