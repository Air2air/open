import TimeLine from "components/TimeLine/timeLine";
import { TitleCentered } from "components/Title/titleCentered";
import { dataVentureStage } from "./dataVentureStage";
import BannerChart from "components/BannerChart/bannerChart";
import { dataMarkets } from "./dataMarkets";

const MarketsPage = () => {
  return (
    <>
      <BannerChart
        data={dataMarkets}
        color="#ffffff"
        title="Mid Decade Market Projections"
        text="Eleven accelerates breakthrough ventures in Biotech, Healthtech, Medtech and Pharmatech."
        typing={true}
      />
      <TitleCentered title="Health AI Venture stages" />
      <TimeLine data={dataVentureStage} title="" text="" backgroundColor={2} />
    </>
  );
};

export default MarketsPage;
