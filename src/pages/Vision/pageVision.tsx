import { COLOR_BASE } from "constants/index";
import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import ChartVision from "components/Chart/Vision/chartVision";
import { BannerVideo } from "components/BannerVideo/videoBanner";
import { dataVision } from "./dataVision";

const pageVideo = 776451115;

const VisionPage = () => {
  return (
    <>
      <BannerVideo
        text="vision"
        pageVideo={pageVideo}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
        s
      />
      <Spacer height={60} />
      <ChartVision columnCount={7} data={dataVision} backgroundColor={2} />
      <RowButton buttonTo="/about" buttonText="About Elevens" />
      <Spacer height={60} />
      {/* <TimeLine data={dataVision} backgroundColor={3} /> */}
    </>
  );
};

export default VisionPage;
