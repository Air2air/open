import RowButton from "components/Button/rowButton";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";
import BannerImage from "components/Banner/Image/bannerImage";

const ConnectPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_5.webp"
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/connectHeading.json" />
      <RowButton buttonTo="/research" buttonText="Research" />
      <CalloutList jsonFile="/data/connectContent.json" />
      <RowButton buttonTo="/research" buttonText="Research" />
    </>
  );
};

export default ConnectPage;
