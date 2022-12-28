import { COLOR_BASE } from "constants/index";
import RowButton from "components/Button/rowButton";
import ChartVision from "components/Chart/Vision/chartVision";
import { BannerVideo } from "components/BannerVideo/bannerVideo";
import { dataVision } from "./dataVision";


const VisionPage = () => {
  return (
    <>
      <BannerVideo
        text="vision"
        pageVideo={776451115}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <ChartVision columnCount={7} data={dataVision} backgroundColor={2} />
      <RowButton buttonTo="/about" buttonText="About" />
      {/* <TimeLine data={dataVision} backgroundColor={3} /> */}
    </>
  );
};

export default VisionPage;
