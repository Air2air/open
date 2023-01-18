import { BannerImage } from "components/Banner/Image/bannerImage";
import RowButton from "components/Button/rowButton";
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
      <RowButton buttonTo="/home" buttonText="Home"/>
      <ContactList jsonFile="/data/contactContent.json"/>
      <RowButton buttonTo="/home" buttonText="Home"/>
    </>
  );
};

export default ContactPage;
