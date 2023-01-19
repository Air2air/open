import RowButton from "components/RowButton/rowButton";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";
import { BannerImage } from "components/Banner/Image/bannerImage";

const pageTitle="Research Programs";

const ResearchPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_8.webp"
        overlayOpacity={0.5}
        overlayColor={1}
      />
      <Heading jsonFile="/data/researchHeading.json" />
      {/* <ResearchChart jsonFile="/data/researchChart.json" /> */}
      <RowButton currentPage={pageTitle} buttonTo="/policy" buttonText="Policy" />
      <CalloutList jsonFile="/data/researchContent.json" />
      <RowButton currentPage={pageTitle} buttonTo="/policy" buttonText="Policy" />
    </>
  );
};

export default ResearchPage;
