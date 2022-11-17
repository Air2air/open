import { COLOR_BASE } from "../../styles/Constants";
import TimeLine from "../../components/TimeLine/timeLine";
import BannerSpacer from "../../components/BannerSpacer/bannerSpacer";
import { dataVentureStage } from "./dataVentureStage";
import { TitleCentered } from "../../components/Title/titleCentered";

const VentureStagePage = () => {
  return (
    <>
      <BannerSpacer />
      <TitleCentered titleText="Health AI Venture stages"/>
      <TimeLine data={dataVentureStage} backgroundColor={COLOR_BASE} />
    </>
  );
};

export default VentureStagePage;

