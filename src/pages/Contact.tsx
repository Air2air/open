import { COLOR_BASE } from "styles/Constants";
import BannerVideo from "components/Banner/bannerVideo";
import ContactList from "components/Contact/contact";
import Heading from "components/Heading/heading";

const ContactPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={769227014}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
      />
      <Heading jsonFile="/data/contactHeading.json" />
      <ContactList jsonFile="/data/contactContent.json"/>
    </>
  );
};

export default ContactPage;
