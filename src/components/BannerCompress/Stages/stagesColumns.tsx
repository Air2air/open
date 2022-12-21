import styled from "styled-components";
import {
  BREAKPOINT, CHART_LABEL_DESKTOP, CHART_LABEL_MOBILE,
} from "styles/Constants";
import { dataStages } from "./dataStages";
import { useState, useEffect } from "react";
import { chartHeightDesktop, chartHeightMobile, columnTransition } from "../Wrapper/config";

export const StagesColumns = () => {

  const [stagesOpacity, setStagesOpacity] = useState(1);
  const [stagesWidth, setStagesWidth] = useState("100%");
  const [stagesTop, setStagesTop] = useState(-200);

  useEffect(() => {

    const stagesInit = setTimeout(() => {
      setStagesOpacity(0);
      setStagesTop(-200);
    }, 0);

    const stagesEnter = setTimeout(() => {
      setStagesOpacity(1);
      setStagesTop(0);
    }, 1000);

    const stagesShrink = setTimeout(() => {
      setStagesOpacity(1);
      setStagesWidth("50%");
    }, 6000);

    const stagesHide = setTimeout(() => {
      setStagesTop(-200);
      setStagesWidth("100%");
    }, 10000);

    const stagesReEnter = setTimeout(() => {
      setStagesTop(0);
    }, 15000);

    const stagesFade = setTimeout(() => {
      setStagesOpacity(0.5);
    }, 21000);

    return () => {
      clearTimeout(stagesInit);
      clearTimeout(stagesEnter);
      clearTimeout(stagesShrink);
      clearTimeout(stagesHide);
      clearTimeout(stagesReEnter);
      clearTimeout(stagesFade);
    };
  }, []);

  return (
    <StagesColumnWrapper style={{ width: stagesWidth, opacity: stagesOpacity, top: stagesTop }}>
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
  transition: all ${columnTransition}ms;
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
