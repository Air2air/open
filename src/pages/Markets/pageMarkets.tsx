import ChartMarkets from "components/Chart/Markets/chartMarkets";

import RowButton from "components/Button/rowButton";
import { COLOR_BASE } from "constants/index";
import BannerVideo from "components/BannerVideo/videoBanner";
import { dataMarkets } from "./dataMarkets";

const MarketsPage = () => {
  return (
    <>
      <BannerVideo
        text="markets"
        pageVideo={766731362}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <ChartMarkets columnCount={5} data={dataMarkets} backgroundColor={1} />
      <RowButton buttonTo="/vision" buttonText="Vision" />
    </>
  );
};

export default MarketsPage;
