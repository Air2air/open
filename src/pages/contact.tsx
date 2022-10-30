

import setBodyColor from "../utils/setBodyColor";
// import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { BANNER_HEIGHT_STANDARD_PX, COLOR_BASE, COLOR_BASE_TEXT } from "../styles/Constants";
import Callout from "../components/Callout/callOut";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SLbc-UQ7tktpq62bt/videoblocks-motionflow10860_rtil0cnes__9e8374df63b3218366e8471bb5117fc7__P360.mp4";

const ContactPage = () => {
  setBodyColor({ color: COLOR_BASE });



  return (
    <>
      <BannerVideo
        pageTitle="Contact Eleven.ai"
        pageDescription="Still completing the contact form validation, filtering and success state"
        pageVideo={pageVideo}
        overlayOpacity={0.5}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="What we do in BioTech"
        calloutText="<p>Silicon Valley</p>

        <p>Stanford, California, United States</p>
        
        
        
        <p>Silicon Valley North</p>
        
        <p>Toronto, Ontario, Canada</p>
        
        
        
        <p>Silicon Hills</p>
        
        <p>Austin, Texas, United States</p>
        
        
        
        
        Email Address<br />
        
        Full Name<br />
        
        Company<br />
        
        Title<br />
        
        Who referred you or How you discovered us<br />
        
        Message<br />
        
        Submit Button</p>"
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default ContactPage;
