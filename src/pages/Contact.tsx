import { BannerImage } from "components/Banner/Image/bannerImage";
import RowButton from "components/RowButton/rowButton";
import ContactList from "components/Contact/contact";
import Heading from "components/Heading/heading";

const pageTitle="Contact Open";

const ContactPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_3.webp"
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/contactHeading.json" />
      <RowButton currentPage={pageTitle} buttonTo="/home" buttonText="Home"/>
      <ContactList jsonFile="/data/contactContent.json"/>
      <RowButton currentPage={pageTitle} buttonTo="/home" buttonText="Home"/>
    </>
  );
};

export default ContactPage;
