import setBodyColor from "../utils/setBodyColor";
import { COLOR_BASE } from "../styles/Constants";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import ContactCallout from "../components/ContactCallout/contactCallOut";

const pageVideo = 765122469;

const ContactPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Contact Elevens.ai"
        pageDescription=""
        pageVideo={pageVideo}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <ContactCallout />
    </>
  );
};

export default ContactPage;
