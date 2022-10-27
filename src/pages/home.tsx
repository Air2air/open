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

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/PDaTSuJ/plexus-abstract-network-titles-cinematic-background-11_sw_9z9b0__ffac24ba90312a2727157d246ace9773__P720.mp4";

const HomePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Just the outcomes you want."
        pageDescription="Derisk your health AI investments with 100+ years of combined real-world experience in healthcare AI."
        pageVideo={pageVideo}
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="Proven leaders for your initiatives"
        calloutText="Consult the most experienced healthcare and clinical machine learning leaders from leading academic medical centers, venture capital, large technology companies, and successful digital health startups."
        backgroundColor={COLOR_BASE_1}
        textColor={COLOR_BASE_TEXT}
        buttonText="How we work together"
        buttonTo="/approach"
      />
      <Callout
        calloutTitle="Your company stages"
        calloutText="Eleven advises health-tech startups through every investment phase.  We save you costly time, money and equity."
        backgroundColor={COLOR_BASE_2}
        textColor={COLOR_BASE_TEXT}
        buttonText="Company stages"
        buttonTo="/timeline"
      />
    </>
  );
};

export default HomePage;
