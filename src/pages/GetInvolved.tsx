import RowButton from "components/Button/rowButton";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";
import BannerImage from "components/Banner/Image/bannerImage";

const GetInvolvedPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_5.webp"
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/getinvolvedHeading.json" />
      <RowButton buttonTo="/policy" buttonText="Policy" />
      <CalloutList jsonFile="/data/getinvolvedContent.json" />
      <RowButton buttonTo="/policy" buttonText="Policy" />
    </>
  );
};

export default GetInvolvedPage;
