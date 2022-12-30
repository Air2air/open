import setBodyColor from "utils/setBodyColor";
import { COLOR_BASE } from "constants/index";
import BannerVideo from "components/BannerVideo/bannerVideo";
import ContactCallout from "../../components/ContactCallout/contactCallOut";
import { BannerText } from "components/BannerText/bannerText";


const ContactPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageVideo={769227014}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <BannerText text="contact" />
      <ContactCallout />
    </>
  );
};

export default ContactPage;
