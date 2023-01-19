import RowButton from "components/RowButton/rowButton";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";
import BannerImage from "components/Banner/Image/bannerImage";

const pageTitle="Policy and Advocacy";

const PolicyPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_7.webp"
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/policyHeading.json" />
      <RowButton currentPage={pageTitle} buttonTo="/education" buttonText="Education" />
      <CalloutList jsonFile="/data/policyContent.json" />
      <RowButton currentPage={pageTitle} buttonTo="/education" buttonText="Education" />
    </>
  );
};

export default PolicyPage;
