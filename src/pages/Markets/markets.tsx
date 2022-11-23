import TimeLine from "components/TimeLine/timeLine";
import { dataVentureStage } from "./dataVentureStage";
import BannerChart from "components/BannerChart/bannerChart";
import { dataMarkets } from "./dataMarkets";
import { TitleCentered } from "components/Title/titleCentered";

const MarketsPage = () => {
  return (
    <>
      <BannerChart
        data={dataMarkets}
        color="#ffffff"
        title="Mid Decade Market Projections"
        text="Eleven accelerates breakthrough ventures in Biotech, Healthtech, Medtech and Pharmatech:"
        typing={true}
      />
      <TitleCentered title="AI Venture Stages" />
      <TimeLine data={dataVentureStage} backgroundColor={3} />
    </>
  );
};

export default MarketsPage;
