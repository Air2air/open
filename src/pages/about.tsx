import setBodyColor from "../utils/setBodyColor";
import BannerVideo from "../components/BannerVideo/bannerVideo";
// import About from "../components/About/about";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_TEXT,
} from "../styles/Constants";
import { Callout } from "../components/Callout/callOut";
import OrgsCallout from "../components/OrgsCallout/orgsCallOut";

const pageVideo = 765129157;

const AboutPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="About Elevens"
        pageDescription="If you know healthcare AI, you already know us."
        pageVideo={pageVideo}
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle=""
        calloutText="<p>Eleven was created when some of the foremost AI and medical minds on the planet came together to accelerate breakthrough ventures in health-tech, med-tech, bio-tech, and pharma-tech. These experts (Elevens) are the leaders in AI technologies and business in medicine, healthcare, bioscience, and pharmaceutical science, and all share a mission to deliver today's most fundamental healthcare <b>AI advancements</b>.</p><p>Our team of healthcare and clinical machine learning leaders comes from leading academic medical centers, venture capital, large technology companies, and successful digital health startups.</p>
        "
        backgroundColor={COLOR_BASE_1}
        textColor={COLOR_BASE_TEXT}
        buttonText="Contact Us"
        buttonTo="/contact"
      />
            <OrgsCallout
        calloutTitle=""
        calloutText="<p>Eleven was created when eleven of the foremost AI and medical minds on the planet came together to accelerate <b>breakthrough ventures</b> in health-tech, med-tech, bio-tech, and pharma-tech. These experts are the leaders in AI technologies and business in medicine, healthcare, bioscience, and pharmaceutical science, and all share a mission to deliver today's most fundamental healthcare AI <b>advancements</b>.</p><p> Our team of healthcare and clinical machine learning leaders comes  from leading academic medical centers, venture capital, large technology companies, and successful digital health startups.</p>
        "
        backgroundColor={COLOR_BASE_2}
        textColor={COLOR_BASE_TEXT}
        buttonText="Contact Us"
        buttonTo="/contact"
      />
    </>
  );
};

export default AboutPage;
