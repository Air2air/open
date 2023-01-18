import BannerVideo from "components/Banner/bannerVideo";
import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";

const PolicyPage = () => {
  // const loopEndTime = 14000;

  return (
    <>
      <BannerVideo
        pageVideo={776446335}
        overlayOpacity={0.4}
        overlayColor={1}
        // loopEndTime={loopEndTime}
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
