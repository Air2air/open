
import Container from "components/Container/container";
import { FetchData } from "fetch/fetch";
import { BarLabel } from "../barLabel";
import {
  ChartSection,
  ChartWrapper,
  BarOuter,
  BarInner,
  concatPercent,
  animationEnter,
  GraphLegend,
  ChartSkeleton,
} from "../chartComponents";



const ResearchChart = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });

  if (loading) {
    return <ChartSkeleton />;
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

export default ResearchChart;
