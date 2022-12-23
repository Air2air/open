// import { IColumnMarketsProps } from "interfaces/callouts";
import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_COLUMN_STAGGER,
  CHART_COLUMN_TRANSITION,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
  CHART_SECTION_HEIGHT_DESKTOP,
  CHART_SECTION_HEIGHT_MOBILE,
  COLOR_WHITE,
  COLUMN_GRID_GAP_DESKTOP,
  COLUMN_GRID_GAP_MOBILE,
} from "constants/index";
import { dataMarkets } from "./dataMarkets";

const ColumnMarkets = (props) => {
  // const [columnsAreEntering, setColumnsAreEntering] = useState(0);

  const animationEnter = (index: number) =>
    `fadeInUp ${CHART_COLUMN_TRANSITION}ms ease-out ${
      CHART_COLUMN_STAGGER * (index + 1)
    }ms forwards`;

  return (
    <>
      <MarketColumnWrapper>
        <MarketsColumn
          key={props.id}
          style={{
            height: props.height + "%",
            backgroundColor: props.backgroundColor,
            animation: animationEnter(props.index),
          }}
        >
          <Label>{props.label}</Label>
        </MarketsColumn>
      </MarketColumnWrapper>
    </>
  );
};

const barMinHeightDesktop = 30;
const barMinHeightMobile = 10;

const dataMarketsLength = dataMarkets.length;

const MarketColumnWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${dataMarketsLength}, 1fr);
  overflow: hidden;
  flex: 1;
  height: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_DESKTOP};
    height: ${CHART_SECTION_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_MOBILE};
    height: ${CHART_SECTION_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
`;

const MarketsColumn = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  width: 100%;
  /* opacity: 0; */
  @media (min-width: ${BREAKPOINT}px) {
    min-height: ${barMinHeightDesktop}px;
    align-items: flex-start;
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: ${barMinHeightMobile}px;
    align-items: flex-end;
  }
  /* background: gold; */
`;

const Label = styled.div`
  min-width: 100px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color: ${COLOR_WHITE};
  @media (min-width: ${BREAKPOINT}px) {
    font-size: ${CHART_LABEL_DESKTOP};
    text-align: center;
    padding-top: 10px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    transform: translate(0, -260%) rotate(90deg);
    transform-origin: 50%;
    /* writing-mode: vertical-rl; */
    font-size: ${CHART_LABEL_MOBILE};
  }
  /* background: green; */
`;

export default ColumnMarkets;
