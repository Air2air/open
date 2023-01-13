import BannerVideo from "components/Banner/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import VisionChart from "components/Chart/Vision/chartVision";
import Heading from "components/Heading/heading";

const VisionPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776451115}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
      />
      <Heading jsonFile="/data/visionHeading.json" />
      <VisionChart jsonFile="/data/visionChart.json" />
      <RowButton buttonTo="/history" buttonText="History" backgroundColor={3} />
      <Spacer height={40} backgroundColor={3} />
      <CalloutList jsonFile="/data/visionContent.json" />
      <Spacer height={40} backgroundColor={3} />
      <RowButton buttonTo="/history" buttonText="History" backgroundColor={3} />
      <Spacer height={40} backgroundColor={3} />
    </>
  );
};

export default VisionPage;
