import ChartMarkets from "components/Chart/Markets/chartMarkets";
import Spacer from "components/Spacer/spacer";
import HeadingMarkets from "components/Heading/headingMarkets";
import RowButton from "components/Button/rowButton";
import { COLOR_BASE } from "constants/index";
import BannerVideo from "components/VideoBanner/videoBanner";



const MarketsPage = () => {
  return (
    <>
      <BannerVideo
        title="Markets "
        text="Markets Page Subtitle, Markets Page Subtitle, Markets Page Subtitle, Markets Page Subtitle "
        pageVideo={766731362}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <ChartMarkets backgroundColor={1} />
      <HeadingMarkets backgroundColor={1} />
      <RowButton buttonTo="/vision" buttonText="Vision" />
      <Spacer height={60} />
    </>
  );
};

export default MarketsPage;
