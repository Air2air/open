import { COLOR_BASE } from "constants/index";
import RowButton from "components/Button/rowButton";

import Spacer from "components/Spacer/spacer";
import ChartVision from "components/Chart/Vision/chartVision";
import { BannerVideo } from "components/BannerVideo/videoBanner";

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
      />
      <ChartVision backgroundColor={COLOR_BASE} />
      <RowButton buttonTo="/about" buttonText="About Elevens" />
      <Spacer height={60} />
      {/* <TimeLine data={dataVentureStage} backgroundColor={3} /> */}
    </>
  );
};

export default VisionPage;
