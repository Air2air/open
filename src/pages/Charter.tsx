import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import Heading from "components/Heading/heading";
import CalloutList from "components/Callout/callOutList";
import BannerVideo from "components/Banner/bannerVideo";

const CharterPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776446335}
        overlayOpacity={0.4}
        overlayColor={1}
        // loopEndTime={loopEndTime}
      />
      <Heading jsonFile="/data/charterHeading.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/about" buttonText="About" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
      <CalloutList jsonFile="/data/charterContent.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/about" buttonText="About" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default CharterPage;
