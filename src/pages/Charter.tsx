import RowButton from "components/Button/rowButton";
import Heading from "components/Heading/heading";
import CalloutList from "components/Callout/callOutList";
import BannerImage from "components/Banner/Image/bannerImage";

const CharterPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_3.webp"
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile="/data/charterHeading.json" />
      <RowButton buttonTo="/about" buttonText="About" />
      <CalloutList jsonFile="/data/charterContent.json" />
      <RowButton buttonTo="/about" buttonText="About" />
    </>
  );
};

export default CharterPage;
