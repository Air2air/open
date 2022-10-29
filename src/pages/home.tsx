import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_TEXT,
} from "../styles/Constants";

const pageVideo = 765122469;

const HomePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Drive Health AI portfolio success."
        pageDescription="Derisk your health AI investments with the top healthcare machine learning leaders. "
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="We know what you need."
        calloutText="The most <b>experienced</b> healthcare and clinical machine learning leaders from leading academic medical centers, venture capital, large technology companies, and successful digital health startups."
        backgroundColor={COLOR_BASE_1}
        textColor={COLOR_BASE_TEXT}
        buttonText="What we do for you"
        buttonTo="/approach"
      />
      <Callout
        calloutTitle="Health AI Markets"
        calloutText="Over 100 years combined experience in Bio, Health, Med and Pharma AI."
        backgroundColor={COLOR_BASE_2}
        textColor={COLOR_BASE_TEXT}
        buttonText="Health AI Markets"
        buttonTo="/markets"
      />
      <Callout
        calloutTitle="Our Vision"
        calloutText="In 1956, 11 experts from multiple scientific disciplines traveled around the world to meet at Dartmouth College. Their purpose?"
        backgroundColor={COLOR_BASE_3}
        textColor={COLOR_BASE_TEXT}
        buttonText="Our Vision"
        buttonTo="/vision"
      />
    </>
  );
};

export default HomePage;
