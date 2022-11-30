import setBodyColor from "./../utils/setBodyColor";
import { COLOR_BASE } from "./../styles/Constants";
import BannerVideo from "./../components/BannerVideo/bannerVideo";
import ContactCallout from "../components/ContactCallout/contactCallOut";

const pageVideo = 776449715;

const ContactPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        title="Contact Elevens.ai"
        text=""
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
