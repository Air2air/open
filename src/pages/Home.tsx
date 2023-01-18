import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
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
      <Spacer height={40} backgroundColor={1} />
      <RowButton
        buttonTo="/getinvolved"
        buttonText="Get Involved"
        backgroundColor={1}
      />
      <Spacer height={40} backgroundColor={1} />
      <CalloutList jsonFile="/data/homeContent.json" />
      <Spacer height={40} backgroundColor={0} />
      <RowButton
        buttonTo="/getinvolved"
        buttonText="Get Involved"
        backgroundColor={0}
      />
      <Spacer height={40} backgroundColor={0} />
      {/* <OrgsCallout jsonFile="/data/orgsContent.json" /> */}
    </>
  );
};

export default HomePage;
