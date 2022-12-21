import TimeLine from "components/TimeLine/timeLine";
import { dataVentureStage } from "../Vision/dataVentureStage";
import BannerChart from "components/BannerChart/bannerMarkets";
import { dataMarkets } from "./dataMarkets";
import { TitleCentered } from "components/Title/titleCentered";
import Button from "components/Button/button";
import Container from "components/Container/container";

const MarketsPage = () => {
  return (
    <>
      <BannerChart
        data={dataMarkets}
        color="#ffffff"
        label="Mid Decade Market Projections"
        text="Eleven accelerates breakthrough ventures in Biotech, Healthtech, Medtech and Pharma"
        typing={true}
        randomHeight={false}
        backgroundColor={2}
      />
      <TitleCentered title="AI Venture Stages" />


      <Container>
        <Button buttonTo="/vision" buttonText="Vision" />
      </Container>
    </>
  );
};

export default MarketsPage;
