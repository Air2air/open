import ChartMarkets from "components/Chart/Markets/chartMarkets";
import Callout from "components/Callout/callOut";
import Spacer from "components/Spacer/spacer";

const MarketsPage = () => {
  return (
    <>
      <Spacer height={120} />
      <ChartMarkets />
      <Callout
        title=""
        text="Elevens accelerates breakthrough ventures in Biotech, Healthtech, Medtech and Pharma."
        buttonText="Vision"
        buttonTo="/vision"
        buttonColor="white"
      />
    </>
  );
};

export default MarketsPage;
