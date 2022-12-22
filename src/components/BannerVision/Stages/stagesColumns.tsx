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

export const StagesColumns = () => {
  const [stagesEndLoop, setStagesEndLoop] = useState(0);

  useEffect(() => {
    const stagesInit = setTimeout(() => {
      setStagesEndLoop(0);
    }, 0);

    const stagesEndLoop = setTimeout(() => {
      setStagesEndLoop(1);
    }, 24000);

    return () => {
      clearTimeout(stagesInit);
      clearTimeout(stagesEndLoop);
    };
  }, [stagesEndLoop]);

  const animationString = (index) =>
    `fadeInDown ${CHART_COLUMN_TRANSITION}ms ease-out ${
      CHART_COLUMN_STAGGER * (index + 1)
    }ms forwards`;

  return (
    <StagesColumnWrapper>
      {dataStages.map((item, index) => (
        <StagesColumn
          key={index}
          style={{
            backgroundColor: item.backgroundColor,
            animation: animationString(index),
          }}
        >
          <span>{item.label}</span>
        </StagesColumn>
      ))}
      <div style={{ width: stagesEndLoop }} />
    </StagesColumnWrapper>
  );
};

const dataVisionLength = dataStages.length;

const StagesColumnWrapper = styled.div`
  position: absolute;
  left: 0;
  display: grid;
  grid-template-columns: repeat(${dataVisionLength}, 1fr);
  transform-origin: 0% 0%;
  transition: all ${CHART_COLUMN_TRANSITION}ms;
  width: 100%;
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
