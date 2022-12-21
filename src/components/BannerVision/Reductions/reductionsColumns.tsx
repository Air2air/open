import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
} from "styles/Constants";
import { dataReductions } from "./dataReductions";
import { useState, useEffect } from "react";
import {
  chartHeightDesktop,
  chartHeightMobile,
  columnTransition,
} from "../Wrapper/config";

export const ReductionsColumns = () => {
  const [reductionsOpacity, setReductionsOpacity] = useState(0);
  const [reductionsTop, setReductionsTop] = useState(0);
  const [reductionsWidth, setReductionsWidth] = useState('100%');

  useEffect(() => {
    const reductionsInit = setTimeout(() => {
      setReductionsOpacity(0);
      setReductionsTop(0);
      setReductionsWidth('100%');
    }, 0);

    const reductionsEnter = setTimeout(() => {
      setReductionsOpacity(1);
    }, 11000);

    const reductionsLeave = setTimeout(() => {
      setReductionsTop(200);
    }, 15000);

    return () => {
      clearTimeout(reductionsInit);
      clearTimeout(reductionsEnter);
      clearTimeout(reductionsLeave);
    };
  }, []);

  return (
    <ReductionsColumnWrapper
      style={{
        opacity: reductionsOpacity,
        top: reductionsTop,
        width: reductionsWidth,
      }}
    >
      {dataReductions.map((item) => (
        <ReductionsColumn
          id="stages-column"
          key={item.id}
          style={{ backgroundColor: item.backgroundColor }}
        >
          {/* width: {width} */}
          <div>{item.label}</div>
        </ReductionsColumn>
      ))}
    </ReductionsColumnWrapper>
  );
};

// the length of dataVision array
const dataVisionLength = dataReductions.length;

const ReductionsColumnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(${dataVisionLength}, 1fr);
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
  /* background: red; */
`;

const ReductionsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: inherit;

  & div {
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    word-wrap: break-word;
    padding: 0 10px;
    @media (min-width: ${BREAKPOINT}px) {
      font-size: ${CHART_LABEL_DESKTOP};
    }
    @media (max-width: ${BREAKPOINT}px) {
      font-size: ${CHART_LABEL_MOBILE};
    }
    /* background: red; */
  }
`;
