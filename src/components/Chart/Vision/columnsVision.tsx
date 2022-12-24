import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
  COLUMN_GRID_GAP_DESKTOP,
  COLUMN_GRID_GAP_MOBILE,
  CHART_HEIGHT_DESKTOP,
  CHART_HEIGHT_MOBILE,
  CHART_COLUMN_TRANSITION,
  CHART_COLUMN_STAGGER,
} from "constants/index";
import { dataVision } from "./dataVision";
import { useState, useEffect } from "react";
import { LoopEndTime } from "./chartVision";

export const VisionColumns = () => {
  const [columnsAreEntering, setColumnsAreEntering] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {

    setColumnsAreEntering(1);

    const columnAnimationEnd = setTimeout(() => {
      setColumnsAreEntering(0);
    }, LoopEndTime - 4000);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(columnsAreEntering);
      clearTimeout(columnAnimationEnd);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const animationEnter = (index: number) =>
    `fadeInDown ${CHART_COLUMN_TRANSITION}ms ease-out ${
      CHART_COLUMN_STAGGER * (index + 1)
    }ms forwards`;

  const animationExit = (index: number) =>
    `fadeOutDown ${CHART_COLUMN_TRANSITION}ms ease-in ${
      CHART_COLUMN_STAGGER * (index + 1)
    }ms forwards`;

  return (
    <StageColumnWrapper>
      {dataVision.map((item, index) => {
        return (
          <>
            <StageColumn
              key={index}
              style={{
                backgroundColor: item.backgroundColor,
                animation: columnsAreEntering
                  ? animationEnter(index)
                  : animationExit(index),
                opacity: columnsAreEntering ? 0 : 1,
              }}
            >
              <span>{item.label}</span>
            </StageColumn>
          </>
        );
      })}
    </StageColumnWrapper>
  );
};

const dataVisionLength = dataVision.length;

const StageColumnWrapper = styled.div`
  position: absolute;
  left: 0;
  display: grid;
  grid-template-columns: repeat(${dataVisionLength}, 1fr);
  transform-origin: 0% 0%;
  transition: all ${CHART_COLUMN_TRANSITION}ms;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_DESKTOP}px;
    height: ${CHART_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_MOBILE}px;
    height: ${CHART_HEIGHT_MOBILE}px;
  }
`;

const StageColumn = styled.div`
  display: flex;
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
