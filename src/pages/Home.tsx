import OrgsCallout from "components/OrgsCallout/orgsCallOut";
import RowButton from "components/Button/rowButton";
import BannerVideo from "components/Banner/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import { BannerText } from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";
import HomeChart from "components/Chart/Home/chartHome";

const HomePage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776443340}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
      />
      <BannerText text="home" />
      <HomeChart jsonFile="/data/homeChart.json" />
      <RowButton
        buttonTo="/whatwedo"
        buttonText="What we do"
        backgroundColor={2}
      />
      <Spacer height={40} backgroundColor={2} />
      <OrgsCallout backgroundColor={1} />
    </>
  );
};

export default HomePage;
