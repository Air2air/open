import { BannerImage } from "components/Banner/Image/bannerImage";
import ContactList from "components/Contact/contact";
import Heading from "components/Heading/heading";

const ContactPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_3.webp"
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile="/data/contactHeading.json" />
      <ContactList jsonFile="/data/contactContent.json"/>
    </>
  );
};

export default ContactPage;
