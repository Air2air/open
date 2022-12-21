import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
} from "styles/Constants";
import { dataStages } from "./dataStages";
import { useState, useEffect } from "react";
import {
  chartHeightDesktop,
  chartHeightMobile,
  columnTransition,
} from "../Wrapper/config";

export const StagesColumns = () => {
  const [stagesOpacity, setStagesOpacity] = useState(1);
  const [stagesTop, setStagesTop] = useState(-200);
  const [stagesEndLoop, setStagesEndLoop] = useState(0);

  useEffect(() => {

    const stagesInit = setTimeout(() => {
      setStagesOpacity(0);
      setStagesTop(-200);
      setStagesEndLoop(0);
    }, 0);

    const stagesEnter = setTimeout(() => {
      setStagesOpacity(1);
      setStagesTop(0);
    }, 1000);

    const stagesShrink = setTimeout(() => {
      setStagesOpacity(1);
    }, 10000);

    const stagesExit = setTimeout(() => {
      setStagesTop(-200);
    }, 21000);

    const stagesEndLoop = setTimeout(() => {
      setStagesEndLoop(1);
    }, 24000);

    return () => {
      clearTimeout(stagesInit);
      clearTimeout(stagesEnter);
      clearTimeout(stagesShrink);
      clearTimeout(stagesExit);
      clearTimeout(stagesEndLoop);
    };
  }, [stagesEndLoop]);


//crete a useEffect function that loops continuously


  return (
    <StagesColumnWrapper
      style={{ opacity: stagesOpacity, top: stagesTop }}
    >
      {dataStages.map((item) => (
        <StagesColumn
          id="stages-column"
          key={item.id}
          style={{ backgroundColor: item.backgroundColor }}
        >
          {/* width: {width} */}
          <span>{item.label}</span>
        </StagesColumn>
      ))}
      <div style={{ width: stagesEndLoop }} />
    </StagesColumnWrapper>
  );
};

// the length of dataVision array
const dataVisionLength = dataStages.length;

const StagesColumnWrapper = styled.div`
  position: absolute;
  left: 0;
  display: grid;
  grid-template-columns: repeat(${dataVisionLength}, 1fr);
  transform-origin: 0% 0%;
  transition: all ${columnTransition}ms;
  width:100%;
  @media (min-width: ${BREAKPOINT}px) {
    grid-gap: 10px;
    height: ${chartHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    grid-gap: 2px;
    height: ${chartHeightMobile}px;
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
