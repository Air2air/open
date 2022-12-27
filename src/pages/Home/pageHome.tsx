import OrgsCallout from "../../components/OrgsCallout/orgsCallOut";
import ChartHome from "components/Chart/Home/chartHome";
import RowButton from "components/Button/rowButton";
import BannerVideo from "components/BannerVideo/videoBanner";
import { COLOR_BASE } from "constants/index";
import { dataHome } from "./dataHome";

const HomePage = () => {
  const loopEndTime = 14000;

  return (
    <>
      <BannerVideo
        text="home"
        pageVideo={776443340}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        loopEndTime={loopEndTime}
      />

      <ChartHome
        columnCount={7}
        data={dataHome}
        loopEndTime={loopEndTime}
        backgroundColor={1}
      />
      <RowButton
        buttonTo="/practice_areas"
        buttonText="What we do"
        backgroundColor={4}
      />
      <OrgsCallout />
    </>
  );
};

export default HomePage;
