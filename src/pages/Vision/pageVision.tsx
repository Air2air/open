import TimeLine from "components/TimeLine/timeLine";
import { dataVentureStage } from "./dataVentureStage";
import { COLOR_BASE } from "constants/index";
import RowButton from "components/Button/rowButton";
import HeadingVision from "components/Heading/headingVision";
import Spacer from "components/Spacer/spacer";
import ChartVision from "components/Chart/Vision/chartVision";
import { BannerVideo } from "components/VideoBanner/videoBanner";

const pageVideo = 776451115;

const VisionPage = () => {
  return (
    <>
      <BannerVideo
        title="Vision Page Title"
        text="Vision Page Subtitle, Vision Page Subtitle, Vision Page Subtitle, Vision Page Subtitle "
        pageVideo={pageVideo}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <ChartVision backgroundColor={COLOR_BASE} />
      <HeadingVision backgroundColor={COLOR_BASE} />
      <RowButton buttonTo="/practice_areas" buttonText="What we do" />
      <Spacer height={60} />
      <TimeLine data={dataVentureStage} backgroundColor={3} />
    </>
  );
};

export default VisionPage;
