import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_COLUMN_TRANSITION,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
  CHART_SECTION_HEIGHT_DESKTOP,
  CHART_SECTION_HEIGHT_MOBILE,
  COLOR_WHITE,
} from "constants/index";
///import { dataPracticeAreas } from "./../../../pages/PracticeAreas/dataPracticeAreas";

const ColumnPracticeAreas = (props) => {
  const [seriesRandomHeight, setSeriesRandomHeight] = useState(50);

  const minHeight = 20;
  const maxHeight = 100;

  const randomHeight = () => {
    const randomNumber = Math.random() * (maxHeight - minHeight) + minHeight;
    setSeriesRandomHeight(randomNumber);
  };

  const minInterval = 3000;
  const maxInterval = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      randomHeight();
    }, Math.random() * (maxInterval - minInterval) + minInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <ColumnWrapper>
      <ColumnSeries
        key={props.id}
        style={{
          height: seriesRandomHeight + "%",
          backgroundColor: props.backgroundColor,
        }}
      >
        <Label>{props.label}</Label>
      </ColumnSeries>
    </ColumnWrapper>
  );
};

const barMinHeightDesktop = 30;
const barMinHeightMobile = 10;

//const dataPracticeAreasLength = dataPracticeAreas.length;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_SECTION_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_SECTION_HEIGHT_MOBILE}px;
  }
  /* background: gold; */
`;

const ColumnSeries = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: flex-end;
  transition: all ${CHART_COLUMN_TRANSITION}ms;
  /* width: 100%; */
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
  color: ${COLOR_WHITE};
  min-width: 100px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all ${CHART_COLUMN_TRANSITION}ms;
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

export default ColumnPracticeAreas;
