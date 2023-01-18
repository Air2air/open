import RowButton from "components/Button/rowButton";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";
import BannerImage from "components/Banner/Image/bannerImage";

const PolicyPage = () => {


  return (
    <>
      <BannerImage
        pageImage="banner_2.webp"
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile="/data/policyHeading.json" />
      <RowButton buttonTo="/research" buttonText="Research" />
      <CalloutList jsonFile="/data/policyContent.json" />
      <RowButton buttonTo="/research" buttonText="Research" />
    </>
  );
};

export default PolicyPage;
