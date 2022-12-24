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
} from "constants/index";
import { dataMarkets } from "./dataMarkets";
import { useState, useEffect } from "react";
import { LoopEndTime } from "./chartMarkets";

export const MarketsColumns = () => {
  const [columnsAreEntering, setColumnsAreEntering] = useState(0);
  const [columnWidth, setColumnWidth] = useState("100%");
  const [count, setCount] = useState(1);

  useEffect(() => {
    setColumnWidth("100%");
    setColumnsAreEntering(1);

    const columnShrink = setTimeout(() => {
      setColumnWidth("50%");
    }, 7000);

    const columnExit = setTimeout(() => {
      setColumnsAreEntering(0);
    }, LoopEndTime - 2000);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(columnShrink);
      clearTimeout(columnExit);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const animationEnter = (index: number) =>
    `fadeInUp ${CHART_COLUMN_TRANSITION}ms ease-out ${
      CHART_COLUMN_STAGGER * (index + 1)
    }ms forwards`;

  const animationExit = (index: number) =>
    `fadeOutDown ${CHART_COLUMN_TRANSITION}ms ease-in ${
      CHART_COLUMN_STAGGER * (index + 1)
    }ms forwards`;

  return (
    <MarketsColumnWrapper style={{ width: columnWidth }}>
      {dataMarkets.map((item, index) => (
        <MarketsColumn
          key={item.id}
          style={{
            height: item.height,
            backgroundColor: item.backgroundColor,
            animation: columnsAreEntering
              ? animationEnter(index)
              : animationExit(index),
            opacity: columnsAreEntering ? 0 : 1,
          }}
        >
          <span>{item.label}</span>
        </MarketsColumn>
      ))}
    </MarketsColumnWrapper>
  );
};

// the length of dataMarkets array
const dataMarketsLength = dataMarkets.length;

const MarketsColumnWrapper = styled.div`
  position: absolute;
  left: 0;
  display: grid;
  grid-template-columns: repeat(${dataMarketsLength}, 1fr);
  transform-origin: 0% 0%;
  /* transition: all ${CHART_COLUMN_TRANSITION}ms; */
  overflow: hidden;
  @media (min-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_DESKTOP}px;
    height: ${CHART_SECTION_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_MOBILE}px;
    height: ${CHART_SECTION_HEIGHT_MOBILE}px;
  }

`;

const MarketsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: inherit;
  width: auto;
  /* opacity: 0; */
  & span {
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    @media (min-width: ${BREAKPOINT}px) {
      font-size: ${CHART_LABEL_DESKTOP};
      height: inherit;
    }
    @media (max-width: ${BREAKPOINT}px) {
      font-size: ${CHART_LABEL_MOBILE};
      height: inherit;
    }
    /* background: red; */
  }
`;
