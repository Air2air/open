import RowButton from "components/Button/rowButton";
import { COLOR_BASE } from "styles/Constants";
import BannerVideo from "components/Banner/bannerVideo";
import BannerText from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";
import {
  animationEnter,
  BarInner,
  BarOuter,
  ChartSection,
  ChartWrapper,
  concatPercent,
  GraphLegend,
} from "components/Chart/chartComponents";
import Container from "components/Container/container";
import { FetchData } from "fetch/fetch";
import { BarLabel } from "components/Chart/barLabel";
import CalloutList from "components/Callout/callOutList";

const pageVideo = 784844948;
const queryName = "markets";

const MarketsPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={pageVideo}
        overlayOpacity={0.4}
        overlayColor={COLOR_BASE}
      />
      <BannerText text={queryName} />
      <MarketsChart jsonFile="/data/marketsChart.json" />
      <RowButton buttonTo="/vision" buttonText="Vision" backgroundColor={1} />
      <Spacer height={40} backgroundColor={1} />
      <CalloutList jsonFile="/data/marketsContent.json" />
    </>
  );
};

export default MarketsPage;

const MarketsChart = ({ jsonFile }) => {
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
        <Container backgroundColor={1}>
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
              <GraphLegend>
                <div>$1.2T</div>
                <div>$800B</div>
                <div>$400B</div>
                <div style={{ height: 10 }}>&nbsp;</div>
              </GraphLegend>
            </ChartWrapper>
          </ChartSection>
        </Container>
      ) : (
        <div style={{ color: "white" }}>Data Fetch error in Page component</div>
      )}
    </>
  );
};
