import { COLOR_BASE } from "styles/Constants";
import BannerVideo from "components/Banner/bannerVideo";
import { BannerText } from "components/Banner/bannerText";
import ContactList from "components/Contact/contact";

const ContactPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={769227014}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
      />
      <BannerText text="contact" />
      <ContactList jsonFile="/data/contactContent.json"/>
    </>
  );
};

export default ContactPage;
