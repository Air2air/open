import RowButton from "components/Button/rowButton";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";
import { BannerImage } from "components/Banner/Image/bannerImage";

const ResearchPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_8.webp"
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/researchHeading.json" />
      {/* <ResearchChart jsonFile="/data/researchChart.json" /> */}
      <RowButton buttonTo="/education" buttonText="Education" />
      <CalloutList jsonFile="/data/researchContent.json" />
      <RowButton buttonTo="/education" buttonText="Education" />
    </>
  );
};

export default ResearchPage;
