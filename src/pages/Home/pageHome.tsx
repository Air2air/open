// import OrgsCallout from "../../components/OrgsCallout/orgsCallOut";
// import ChartHome from "components/Chart/Home/chartHome";
// import Spacer from "components/Spacer/spacer";
// import RowButton from "components/Button/rowButton";
import BannerVideo from "components/BannerVideo/videoBanner";
import { COLOR_BASE } from "constants/index";

const HomePage = () => {
  return (
    <>
      <BannerVideo
        text="underconstruction"
        pageVideo={776443340}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {/* <ChartHome backgroundColor={1} /> */}
      {/* <RowButton
        buttonTo="/practice_areas"
        buttonText="What we do"
        backgroundColor={4}
      />
      <Spacer height={60} backgroundColor={2} /> */}
      {/* <OrgsCallout /> */}
    </>
  );
};

export default HomePage;
