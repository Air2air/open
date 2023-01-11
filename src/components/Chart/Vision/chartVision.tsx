import Container from "components/Container/container";
import { FetchData } from "fetch/fetch";
import { BarLabel } from "../barLabel";
import { ChartSection, ChartWrapper, BarOuter, BarInner, concatPercent, animationEnter, ChartSkeleton } from "../chartComponents";

const VisionChart = ({ jsonFile }) => {
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
        <div style={{ color: "white" }}>Data Fetch error in Chart component</div>
      )}
    </>
  );
};

export default VisionChart;
