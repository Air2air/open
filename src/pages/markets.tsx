import setBodyColor from "../utils/setBodyColor";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_TEXT,
} from "../styles/Constants";
import Graph from "../components/Graph/graph";

const vimeoVideo = 765132534;

const MarketsPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Health AI Markets"
        pageDescription="Eleven accelerates breakthrough ventures in Biotech, Healthtech, Medtech, and Pharmatech. These sectors collectively comprise one of the largest markets in the world, and the health of these sectors controls the health of our society."
        pageVideo={vimeoVideo}
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Graph backgroundColor={COLOR_BASE_1} graphTitle="2022 Markets" graphHeight={400} />
    </>
  );
};

export default MarketsPage;
