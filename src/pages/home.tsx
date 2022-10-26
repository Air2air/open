import setBodyColor from '../utils/setBodyColor'
import Callout from "./../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { BANNER_HEIGHT_STANDARD_PX, COLOR_BASE, COLOR_BASE_1, COLOR_BASE_TEXT } from "../styles/Constants";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/YqGSkmb/videoblocks-elegant-fantasy-abstract-technology-science-and-engineering-motion-background-with-plexus-lines-in-organic-motion-flickering-light-depth-of-field-settings-3d-rendering_rwkin3nri__4ddca8828e527f2ecb5067c35006b07c__P720.mp4";


const HomePage = () => {
  setBodyColor({color: COLOR_BASE})
  return (
    <>
      <BannerVideo
        pageTitle="Just the outcomes you want."
        pageDescription="Derisk your health AI investments with 100+ years of combined real-world experience in healthcare AI."
        pageVideo={pageVideo}
        overlayOpacity={0.6}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="Proven leaders for your initiatives"
        calloutText="Consult the most experienced healthcare and clinical machine learning leaders from leading academic medical centers, venture capital, large technology companies, and successful digital health startups. "
        backgroundColor={COLOR_BASE_1}
        textColor={COLOR_BASE_TEXT}
        buttonText="How we work together"
        buttonTo="/approach"
        typing={false}
      />
    </>
  );
};

export default HomePage;
