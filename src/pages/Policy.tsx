
import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";
import BannerImage from "components/Banner/Image/bannerImage";

const PolicyPage = () => {
  // const loopEndTime = 14000;

  return (
    <>
      <BannerImage
        pageImage="banner_2.webp"
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile="/data/policyHeading.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/research" buttonText="Research" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
      <CalloutList jsonFile="/data/policyContent.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/research" buttonText="Research" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default PolicyPage;
