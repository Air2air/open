import RowButton from "components/Button/rowButton";
import { COLOR_BASE } from "styles/Constants";
import BannerVideo from "components/Banner/bannerVideo";
import BannerText from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import MarketsChart from "components/Chart/Markets/chartMarkets";

const MarketsPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={784844948}
        overlayOpacity={0.4}
        overlayColor={COLOR_BASE}
      />
      <BannerText text="markets" />
      <MarketsChart jsonFile="/data/marketsChart.json" />
      <RowButton buttonTo="/vision" buttonText="Vision" backgroundColor={1} />
      <Spacer height={40} backgroundColor={1} />
      <CalloutList jsonFile="/data/marketsContent.json" />
    </>
  );
};

export default MarketsPage;
