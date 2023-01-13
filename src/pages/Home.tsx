
import RowButton from "components/Button/rowButton";
import BannerVideo from "components/Banner/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import Spacer from "components/Spacer/spacer";
import HomeChart from "components/Chart/Home/chartHome";
import Heading from "components/Heading/heading";
// import OrgsCallout from "components/OrgsCallout/orgsCallout";

const HomePage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776443340}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
      />
      <Heading jsonFile="/data/homeHeading.json" />
      <HomeChart jsonFile="/data/homeChart.json" />
      <RowButton
        buttonTo="/whatwedo"
        buttonText="What we do"
        backgroundColor={2}
      />
      <Spacer height={40} backgroundColor={2} />
      {/* <OrgsCallout jsonFile="/data/orgsContent.json" /> */}
    </>
  );
};

export default HomePage;
