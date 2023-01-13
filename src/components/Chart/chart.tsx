import {
  animationEnter,
  ChartSection,
  ChartWrapper,
  BarOuter,
  BarInner,
  concatPercent,
} from "components/Chart/chartComponents";
import { BarLabel } from "components/Chart/barLabel";
import Container from "../Container/container";

const Chart = (props, index) => {
  console.log("Chart props", props);

  // map through the props.chart and render the chart components
  return (
    <>
      <Container {...props}>
        <ChartSection>
          <ChartWrapper>
            {props
              ? props.map((item) => {
                  return (
                    <BarOuter key={item.chart.id}>
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
                })
              : "Props not passed to Chart component"}
          </ChartWrapper>
        </ChartSection>
      </Container>
    </>
  );
};

export default Chart;
