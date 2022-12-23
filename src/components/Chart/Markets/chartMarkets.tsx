import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_CAPTION,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
  CHART_SECTION_HEIGHT_MOBILE,
  CHART_SECTION_HEIGHT_DESKTOP,
} from "constants/index";
import ColumnMarkets from "./columnMarkets";
import Container from "components/Container/container";
import { dataMarkets } from "./dataMarkets";


const ChartMarkets = () => {
  return (
    <Container backgroundColor="">
      <ChartSection>
        {dataMarkets.map((item) => (
          <ColumnMarkets
            key={item.id}
            label={item.label}
            height={item.height}
            color={item.color}
            backgroundColor={item.backgroundColor}
          />
        ))}
        <GraphLegend>
          <div>$1.2T</div>
          <div>$800B</div>
          <div>$400B</div>
          <div style={{ height: 10 }}>&nbsp;</div>
        </GraphLegend>
      </ChartSection>
    </Container>
  );
};

const ChartSection = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_SECTION_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_SECTION_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
`;

const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: "100%";
  font-size: ${CHART_LABEL_DESKTOP};
  color: ${COLOR_CAPTION};
  @media (min-width: ${BREAKPOINT}px) {
    font-size: ${CHART_LABEL_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: ${CHART_LABEL_MOBILE};
  }
  /* background: green;  */
`;

export default ChartMarkets;
