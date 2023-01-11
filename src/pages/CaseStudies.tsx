import { useQuery } from "react-query";
import BannerVideo from "components/Banner/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import Callout from "components/Callout/callOut";
import RowButton from "components/Button/rowButton";
import { BannerText } from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";
import BannerLoading from "components/Banner/bannerLoading";
import { BarLabel } from "components/Chart/barLabel";
import {
  ChartSection,
  ChartWrapper,
  BarOuter,
  BarInner,
  concatPercent,
  animationEnter,
} from "components/Chart/chartComponents";
import Container from "components/Container/container";


const dataSource = "/data/dataCaseStudies.json";
const queryName = "casestudies";

interface ICaseStudy {
  id?: number;
  backgroundColor?: number;
}

const CaseStudiesPage = () => {
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

  const loopEndTime = 14000;

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
          <BannerText text="casestudies" />
        </>
      )}
      {status === "success" && (
        <>
          <BannerVideo
            pageVideo={776446335}
            overlayOpacity={0.4}
            overlayColor={COLOR_BASE}
            typing
            loopEndTime={loopEndTime}
          />
          <BannerText text="casestudies" />

          {data && data.length > 0 ? (
            data.map((item, index) => {
              return (
                <div key={index}>
                  <Container backgroundColor={item.backgroundColor}>
                    <ChartSection>
                      <ChartWrapper>
                        {item.chart
                          ? item.chart.map((item) => {
                              return (
                                <BarOuter key={item.id}>
                                  <BarInner
                                    style={{
                                      height: concatPercent(item.height),
                                      backgroundColor: item.backgroundColor,
                                      animation: animationEnter(item.id),
                                    }}
                                  />
                                  <BarLabel
                                    label={item.label}
                                    index={item.id}
                                  />
                                </BarOuter>
                              );
                            })
                          : "Props not passed to Chart component"}
                      </ChartWrapper>
                    </ChartSection>
                  </Container>
                  <Callout {...item} />
                </div>
              );
            })
          ) : (
            <div style={{ color: "white" }}>
              Data Fetch error in Page component
            </div>
          )}

          <Spacer height={40} backgroundColor={2} />
          <RowButton
            buttonTo="/markets"
            buttonText="Markets"
            backgroundColor={2}
          />
          <Spacer height={40} backgroundColor={2} />
        </>
      )}
    </>
  );
};

export default CaseStudiesPage;
