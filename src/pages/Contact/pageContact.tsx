
import { COLOR_BASE } from "styles/Constants";
import BannerVideo from "components/Banner/bannerVideo";
import ContactCallout from "../../components/ContactCallout/contactCallOut";
import { BannerText } from "components/Banner/bannerText";


const ContactPage = () => {

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
