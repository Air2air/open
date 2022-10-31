import setBodyColor from "../utils/setBodyColor";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_TEXT,
} from "../styles/Constants";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { ContactCallout } from "../components/ContactCallout/contactCallOut";

const pageVideo = 765127386;

const ContactPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Contact Elevens.ai"
        pageDescription="Please email or LinkedIn below."
        pageVideo={pageVideo}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />

      <ContactCallout/>
    </>
  );
};

export default ContactPage;
