import setBodyColor from "./../utils/setBodyColor";
import BannerVideo from "./../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "./../styles/Constants";
import Graph from "./../components/Graph/graph";

const pageVideo = 769143399;

const MarketsPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Health AI Markets"
        pageDescription="Eleven accelerates breakthrough ventures in Biotech, Healthtech, Medtech, and Pharmatech. These sectors collectively comprise one of the largest markets in the world, and the health of these sectors controls the health of our society"
        pageVideo={pageVideo}
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Graph
        title="Mid Decade Market Projections"
        backgroundColor={2}
        size={300}
        buttonText="Vision"
        buttonTo="/vision"
      />
    </>
  );
};

export default MarketsPage;
