
import RowButton from "components/Button/rowButton";
import BannerVideo from "components/Banner/bannerVideo";
import Spacer from "components/Spacer/spacer";
import Heading from "components/Heading/heading";
import CalloutList from "components/Callout/callOutList";
// import OrgsCallout from "components/OrgsCallout/orgsCallout";

const HomePage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776443340}
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/homeHeading.json" />
      <CalloutList jsonFile="/data/homeContent.json" />
      <RowButton
        buttonTo="/getinvolved"
        buttonText="Get Involved"
        backgroundColor={2}
      />
      <Spacer height={40} backgroundColor={2} />
      {/* <OrgsCallout jsonFile="/data/orgsContent.json" /> */}
    </>
  );
};

export default HomePage;
