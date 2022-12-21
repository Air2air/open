import BannerChart from "components/BannerChart/bannerMarkets";
import { dataMarkets } from "./dataMarkets";
import { TitleCentered } from "components/Title/titleCentered";
import Button from "components/Button/button";
import Container from "components/Container/container";
import Callout from "components/Callout/callOut";

const MarketsPage = () => {
  return (
    <>
      <BannerChart
        data={dataMarkets}
        color="#ffffff"
        label="Mid Decade Market Projections"
        text=""
        typing={true}
        randomHeight={false}
        backgroundColor={2}
      />
      <Callout
        title=""
        text="Eleven accelerates breakthrough ventures in Biotech, Healthtech, Medtech and Pharma."
        buttonText="Vision"
        buttonTo="/vision"
        buttonColor="white"
      />
    </>
  );
};

export default MarketsPage;
