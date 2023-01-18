import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
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
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/about" buttonText="About" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
      <CalloutList jsonFile="/data/charterContent.json" />
      <Spacer height={40} backgroundColor={1} />
      <RowButton buttonTo="/about" buttonText="About" backgroundColor={1} />
      <Spacer height={40} backgroundColor={1} />
    </>
  );
};

export default CharterPage;
