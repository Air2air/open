

import setBodyColor from "../utils/setBodyColor";
// import Callout from "./../components/Callout/callout";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { BANNER_HEIGHT_STANDARD_PX, COLOR_BASE, COLOR_BASE_TEXT } from "../styles/Constants";

const pageTitle = "Thank you for contacting us.";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/NIHmZbghlilb1qj7b/videoblocks-bacteria-virus-or-germs-microorganism-cells-under-microscope-with-depth_huxxzteyi__85fcc74c9b372b7e15a77bcaa433e568__P360.mp4";


const ContactSuccessPage = () => {
  setBodyColor({ color: COLOR_BASE });


  return (
    <>
      <BannerVideo
        pageTitle={pageTitle}
        pageDescription="Contact page description"
        pageVideo={pageVideo}
        overlayOpacity={0.8}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
    </>
  );
};

export default ContactSuccessPage;
