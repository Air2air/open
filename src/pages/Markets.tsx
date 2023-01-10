import { useQuery } from "react-query";
import RowButton from "components/Button/rowButton";
import { COLOR_BASE } from "styles/Constants";
import BannerVideo from "components/Banner/bannerVideo";
import BannerText from "components/Banner/bannerText";
import Callout from "components/Callout/callOut";
import Spacer from "components/Spacer/spacer";
import BannerLoading from "components/Banner/bannerLoading";
import { BarLabel } from "components/Callout/Chart/barLabel";
import {
  ChartSection,
  ChartWrapper,
  BarOuter,
  BarInner,
  concatPercent,
  animationEnter,
  GraphLegend,
} from "components/Callout/Chart/chartComponents";
import Container from "components/Container/container";

interface IMarkets {
  data: {
    id: number;
    backgroundColor: number;
    callout: {
      title: string;
      label: string;
      text: string;
    };
    chart: {
      id: number;
      title: string;
      label: string;
      height: number;
      randomHeight: boolean;
    }[];
  }[];
}

const dataSource = "/data/dataMarkets.json";
const queryName = "markets";

const MarketsPage = () => {
  const fetchData = async () => {
    const res = await fetch(dataSource, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.json();
  };
  const { data, status } = useQuery(queryName, fetchData);

  return (
    <>
      {status === "error" && (
        <>
          <BannerLoading />
          <BannerText text="error" />
        </>
      )}
      {status === "loading" && (
        <>
          <BannerLoading />
          <BannerText text="markets" />
        </>
      )}
      {status === "success" && (
        <>
          <BannerVideo
            pageVideo={784844948}
            overlayOpacity={0.4}
            overlayColor={COLOR_BASE}
          />
          <BannerText text="markets" />

          {data && data.length > 0 ? (
            <Container backgroundColor={1}>
              <ChartSection>
                <ChartWrapper>
                  {data
                    ? data.map((item) => {
                        return (
                          <BarOuter key={item.chart.id}>
                            <BarInner
                              style={{
                                height: concatPercent(item.chart.height),
                                backgroundColor: item.chart.backgroundColor,
                                animation: animationEnter(item.id),
                              }}
                            />
                            <BarLabel
                              label={item.chart.label}
                              index={item.chart.id}
                            />
                          </BarOuter>
                        );
                      })
                    : "Props not passed to Chart component"}
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
            <div style={{ color: "white" }}>
              Data Fetch error in Page component
            </div>
          )}

          <RowButton
            buttonTo="/vision"
            buttonText="Vision"
            backgroundColor={1}
          />
          <Spacer height={40} backgroundColor={1} />

          {data && data.length > 0 ? (
            data.map((props, index) => {
              return <Callout {...props} key={index} />;
            })
          ) : (
            <div style={{ color: "white" }}>
              Data Fetch error in Page component
            </div>
          )}
        </>
      )}
      <Spacer height={40} backgroundColor={1} />
      <RowButton buttonTo="/vision" buttonText="Vision" backgroundColor={1} />
      <Spacer height={40} backgroundColor={1} />
    </>
  );
};

export default MarketsPage;
