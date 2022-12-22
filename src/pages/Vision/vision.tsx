import setBodyColor from "utils/setBodyColor";
import TimeLine from "components/TimeLine/timeLine";
import { dataVentureStage } from "../Vision/dataVentureStage";
import { COLOR_BASE } from "constants/index";
import BannerVision from "components/BannerVision/bannerVision";

// const pageImage = "dartmouth.jpeg";

const VisionPage = () => {
  setBodyColor({ color: COLOR_BASE });

  return (
    <>
      <BannerVision />
      <TimeLine data={dataVentureStage} backgroundColor={3} />
    </>
  );
};

export default VisionPage;
