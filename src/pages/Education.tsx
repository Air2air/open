import BannerVideo from "components/Banner/bannerVideo";
import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";

const EducationPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776451115}
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/educationHeading.json" />
      <CalloutList jsonFile="/data/educationContent.json" />
      <RowButton buttonTo="/charter" buttonText="Charter" backgroundColor={3} />
    </>
  );
};

export default EducationPage;
