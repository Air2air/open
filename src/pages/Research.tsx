import RowButton from "components/Button/rowButton";
import BannerVideo from "components/Banner/bannerVideo";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";

const ResearchPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={784844948}
        overlayOpacity={0.4}
        overlayColor={1}
      />
      <Heading jsonFile="/data/researchHeading.json" />
      {/* <ResearchChart jsonFile="/data/researchChart.json" /> */}
      <RowButton buttonTo="/education" buttonText="Education" backgroundColor={1} />
      <Spacer height={40} backgroundColor={1} />
      <CalloutList jsonFile="/data/researchContent.json" />
    </>
  );
};

export default ResearchPage;
