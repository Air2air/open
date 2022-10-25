import setBodyColor from '../utils/setBodyColor'
import Callout from "./../components/Callout/callOut";
import PageBanner from "../components/PageBanner/pageBanner";
import { COLOR_BASE, COLOR_BASE_1, COLOR_BASE_TEXT } from "../styles/Constants";

const pageTitle = "Elevens Vision";
const pageSubTitle =
  "Cybersecurity is fundamental to maintaining our way of life. It is essential for global commerce. The lights simply don't turn on without it. At Elevens, we empower founders to create cybersecurity technologies that make our world more secure.";
const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/NIHmZbghlilb1qj7b/videoblocks-bacteria-virus-or-germs-microorganism-cells-under-microscope-with-depth_huxxzteyi__85fcc74c9b372b7e15a77bcaa433e568__P360.mp4";


const HomePage = () => {
  setBodyColor({color: COLOR_BASE})
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageSubTitle={pageSubTitle}
        pageVideo={pageVideo}
        overlayOpacity={0.84}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
      />
      <Callout
        calloutTitle="Our Approach"
        calloutText="This is our Approach. This is our Approach.  This is our Approach.  This is our Approach.  This is our Approach.  This is our Approach.  This is our Approach.  This is our Approach.  This is our Approach.   "
        backgroundColor={COLOR_BASE_1}
        textColor={COLOR_BASE_TEXT}
        buttonText="Our Approach"
        buttonTo="/approach"
        typing={true}
      />
    </>
  );
};

export default HomePage;
