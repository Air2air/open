import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";
import BannerImage from "components/Banner/Image/bannerImage";

const GetInvolvedPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_3.webp"
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile="/data/getinvolvedHeading.json" />
      <RowButton
        buttonTo="/policy"
        buttonText="Policy"
        backgroundColor={3}
      />
      <Spacer height={40} backgroundColor={3} />
      <CalloutList jsonFile="/data/getinvolvedContent.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton
        buttonTo="/policy"
        buttonText="Policy"
        backgroundColor={2}
      />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default GetInvolvedPage;
