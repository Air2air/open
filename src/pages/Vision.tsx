import BannerVideo from "components/Banner/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import RowButton from "components/Button/rowButton";
import { BannerText } from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";

import { FetchData } from "fetch/fetch";
import { BarLabel } from "components/Chart/barLabel";
import {
  ChartSection,
  ChartWrapper,
  BarOuter,
  BarInner,
  concatPercent,
  animationEnter,
  GraphLegend,
} from "components/Chart/chartComponents";
import Container from "components/Container/container";
import CalloutList from "components/Callout/callOutList";

const dataSource = "/data/dataVision.json";
const queryName = "vision";

const VisionPage = () => {
  const loopEndTime = 14000;

  return (
    <>
      <BannerVideo
        pageVideo={776451115}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
      />
      <BannerText text="vision" />
      <VisionChart jsonFile="/data/visionChart.json" />
      <RowButton buttonTo="/history" buttonText="History" backgroundColor={3} />
      <Spacer height={40} backgroundColor={3} />
      <CalloutList jsonFile="/data/visionContent.json" />
      <Spacer height={40} backgroundColor={3} />
      <RowButton buttonTo="/history" buttonText="History" backgroundColor={3} />
      <Spacer height={40} backgroundColor={3} />
    </>
  );
};

export default VisionPage;

const VisionChart = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {data && data.length > 0 ? (
        <Container backgroundColor={3}>
          <ChartSection>
            <ChartWrapper>
              {data.map((item, index) => {
                return (
                  <BarOuter key={index}>
                    <BarInner
                      style={{
                        height: concatPercent(item.height),
                        backgroundColor: item.backgroundColor,
                        animation: animationEnter(item.id),
                      }}
                    />
                    <BarLabel label={item.label} index={item.id} />
                  </BarOuter>
                );
              })}
            </ChartWrapper>
          </ChartSection>
        </Container>
      ) : (
        <div style={{ color: "white" }}>Data Fetch error in Page component</div>
      )}
    </>
  );
};
