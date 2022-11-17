
import TimeLine from "../../components/TimeLine/timeLine";
import BannerSpacer from "../../components/BannerSpacer/bannerSpacer";
import { dataVentureStage } from "./dataVentureStage";
import { TitleCentered } from "../../components/Title/titleCentered";

const VentureStagePage = () => {
  return (
    <>
      <BannerSpacer />
      <TitleCentered title="Health AI Venture stages" />
      <TimeLine
        data={dataVentureStage}
        title=""
        text=""
        backgroundColor={1}
      />
    </>
  );
};

export default VentureStagePage;
