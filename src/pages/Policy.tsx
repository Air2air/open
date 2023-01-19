import RowButton from "components/Button/rowButton";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";
import BannerImage from "components/Banner/Image/bannerImage";

const PolicyPage = () => {


  return (
    <>
      <BannerImage
        pageImage="banner_7.webp"
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/policyHeading.json" />
      <RowButton buttonTo="/education" buttonText="Education" />
      <CalloutList jsonFile="/data/policyContent.json" />
      <RowButton buttonTo="/education" buttonText="Education" />
    </>
  );
};

export default PolicyPage;
