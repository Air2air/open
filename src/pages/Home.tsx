import RowButton from "components/Button/rowButton";
import Heading from "components/Heading/heading";
import CalloutList from "components/Callout/callOutList";
import { BannerImage } from "components/Banner/Image/bannerImage";
// import OrgsCallout from "components/OrgsCallout/orgsCallout";

const HomePage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_1.webp"
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile="/data/homeHeading.json" />
      <RowButton buttonTo="/getinvolved" buttonText="Get Involved" />
      <CalloutList jsonFile="/data/homeContent.json" />
      <RowButton buttonTo="/getinvolved" buttonText="Get Involved" />
      {/* <OrgsCallout jsonFile="/data/orgsContent.json" /> */}
    </>
  );
};

export default HomePage;
