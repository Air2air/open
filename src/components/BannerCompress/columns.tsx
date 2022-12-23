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
import { dataStages } from "./dataStages";
import { useState, useEffect } from "react";
import { LoopEndTime } from "./bannerCompress";

export const StagesColumns = () => {
  const [stagesWidth, setStagesWidth] = useState("100%");
  const [stagesEndLoop, setStagesEndLoop] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setStagesEndLoop(0);

    const stagesShrink = setTimeout(() => {
      setStagesWidth("50%");
    }, 8000);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(stagesShrink);
      clearTimeout(stagesEndLoop);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const animationString = (index) =>
    `fadeInDown ${CHART_COLUMN_TRANSITION}ms ease-out ${
      CHART_COLUMN_STAGGER * (index + 1)
    }ms forwards`;

  return (
    <StagesColumnWrapper style={{ width: stagesWidth }}>
      {dataStages.map((item, index) => (
        <StagesColumn
          key={item.id}
          style={{
            backgroundColor: item.backgroundColor,
            animation: animationString(index),
          }}
        >
          {/* width: {width} */}
          <span>{item.label}</span>
        </StagesColumn>
      ))}
      <div style={{ width: stagesEndLoop }} />
    </StagesColumnWrapper>
  );
};

// the length of dataCompress array
const dataCompressLength = dataStages.length;

const StagesColumnWrapper = styled.div`
  position: absolute;
  left: 0;
  display: grid;
  grid-template-columns: repeat(${dataCompressLength}, 1fr);
  transform-origin: 0% 0%;
  transition: all ${CHART_COLUMN_TRANSITION}ms;
  @media (min-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_DESKTOP};
    height: ${CHART_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    grid-gap: ${COLUMN_GRID_GAP_MOBILE};
    height: ${CHART_HEIGHT_MOBILE}px;
  }
`;

const StagesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: inherit;
  width: auto;
  opacity: 0;
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
