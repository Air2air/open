import setBodyColor from '../utils/setBodyColor'
import Callout from "./../components/Callout/callOut";
import PageBanner from "../components/PageBanner/pageBanner";
import { BANNER_HEIGHT_STANDARD_PX, COLOR_BASE, COLOR_BASE_1, COLOR_BASE_TEXT } from "../styles/Constants";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/NIHmZbghlilb1qj7b/videoblocks-bacteria-virus-or-germs-microorganism-cells-under-microscope-with-depth_huxxzteyi__85fcc74c9b372b7e15a77bcaa433e568__P360.mp4";


const HomePage = () => {
  setBodyColor({color: COLOR_BASE})
  return (
    <>
      <PageBanner
        pageTitle="Just the outcomes you want."
        pageDescription="Derisk your health AI investments with 100+ years of combined real-world experience in healthcare AI."
        pageVideo={pageVideo}
        overlayOpacity={0.84}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="Leaders for your initiatives"
        calloutText="The most experienced healthcare and clinical machine learning leaders from leading academic medical centers, venture capital, large technology companies, and successful digital health startups. "
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
