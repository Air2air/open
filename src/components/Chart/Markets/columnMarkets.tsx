import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
  COLUMN_GRID_GAP_DESKTOP,
  COLUMN_GRID_GAP_MOBILE,
  CHART_COLUMN_TRANSITION,
  CHART_COLUMN_STAGGER,
  CHART_SECTION_HEIGHT_DESKTOP,
  CHART_SECTION_HEIGHT_MOBILE,
  COLOR_CAPTION,
} from "constants/index";
import { dataMarkets } from "./dataMarkets";


export const ColumnMarkets = () => {


  const animationEnterColumn = (index: number) =>
    `fadeInUp ${CHART_COLUMN_TRANSITION}ms ease-out ${
      CHART_COLUMN_STAGGER * (index + 1)
    }ms forwards`;

  const animationEnterLabel = (index: number) =>
    `fadeInDown ${CHART_COLUMN_TRANSITION}ms ease-out ${
      CHART_COLUMN_STAGGER * (index + 1)
    }ms forwards`;

  return (
    <>
      <ColumnsWrapper>
        {dataMarkets.map((item, index) => (
          <ColumnOuter  key={index}>
            <ColumnInner
              key={item.id}
              style={{
                height: item.height,
                backgroundColor: item.backgroundColor,
                animation: animationEnterColumn(index),
                opacity: 0
              }}
            ></ColumnInner>
            <ColumnLabel
              style={{
                animation: animationEnterLabel(index),
                opacity: 0
              }}
            >
              {item.label}
            </ColumnLabel>
          </ColumnOuter>
        ))}
        <GraphLegend>
          <div>$1.2T</div>
          <div>$800B</div>
          <div>$400B</div>
          <div style={{ height: 10 }}>&nbsp;</div>
        </GraphLegend>
      </ColumnsWrapper>
    </>
  );
};

// the length of dataMarkets array
const dataMarketsLength = dataMarkets.length;

const ColumnsWrapper = styled.div`
  position: absolute;
  left: 0;
  display: grid;
  grid-template-columns: repeat(${dataMarketsLength + 1}, 1fr);
  transform-origin: 0% 0%;

  width: 100%;
  overflow: hidden;
  @media (min-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_DESKTOP}px;
    height: ${CHART_SECTION_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_MOBILE}px;
    height: ${CHART_SECTION_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
`;

const ColumnOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  width: 100%;
`;

const ColumnInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
  width: 100%;
`;

const ColumnLabel = styled.div`
  /* text-align: left; */
  position: absolute;
  top: 0;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  @media (min-width: ${BREAKPOINT}px) {
    font-size: ${CHART_LABEL_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: ${CHART_LABEL_MOBILE};
  }
`;

const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: "100%";
  /* align-self: flex-end; */
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
