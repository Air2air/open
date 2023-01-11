
import BannerVideo from "components/Banner/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import RowButton from "components/Button/rowButton";
import { BannerText } from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";


const CaseStudiesPage = () => {
  const loopEndTime = 14000;

  return (
    <>
      <BannerVideo
        pageVideo={776446335}
        overlayOpacity={0.4}
        overlayColor={COLOR_BASE}
        loopEndTime={loopEndTime}
      />
      <BannerText text="casestudies" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/markets" buttonText="Markets" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
      <CalloutList jsonFile="/data/casestudiesContent.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/markets" buttonText="Markets" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default CaseStudiesPage;
