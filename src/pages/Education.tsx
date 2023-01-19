
import BannerImage from "components/Banner/Image/bannerImage";
import RowButton from "components/RowButton/rowButton";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";

const pageTitle="Education and Outreach";


const EducationPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_4.webp"
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/educationHeading.json" />
      <RowButton currentPage={pageTitle} buttonTo="/charter" buttonText="Charter" />
      <CalloutList jsonFile="/data/educationContent.json" />
      <RowButton currentPage={pageTitle} buttonTo="/charter" buttonText="Charter" />
    </>
  );
};

export default EducationPage;
