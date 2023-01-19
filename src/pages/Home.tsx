import RowButton from "components/RowButton/rowButton";
import Heading from "components/Heading/heading";
import CalloutList from "components/Callout/callOutList";
import { BannerImage } from "components/Banner/Image/bannerImage";
// import OrgsCallout from "components/OrgsCallout/orgsCallout";

const pageTitle="Home";

const HomePage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_6.webp"
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/homeHeading.json" />
      <RowButton currentPage={pageTitle} buttonTo="/connect" buttonText="Connect" />
      <CalloutList jsonFile="/data/homeContent.json" />
      <RowButton currentPage={pageTitle} buttonTo="/connect" buttonText="Connect" />
      {/* <OrgsCallout jsonFile="/data/orgsContent.json" /> */}
    </>
  );
};

export default HomePage;
