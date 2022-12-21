import styled from "styled-components";
import { BREAKPOINT, BUTTON_COLOR_RED, CHART_LABEL_DESKTOP, CHART_LABEL_MOBILE } from "styles/Constants";
import { useState, useEffect } from "react";
import {
  chartHeightDesktop,
  chartHeightMobile,
  columnTransition,
} from "../Wrapper/config";

export const SavingsColumns = () => {
  const [savingsOpacity, setSavingsOpacity] = useState(0);
  const [savingsWidth, setSavingsWidth] = useState("10%");
  const [savingsTop, setSavingsTop] = useState(-200);

  useEffect(() => {
    const savingsInit = setTimeout(() => {
      setSavingsOpacity(0);
      setSavingsTop(-200);
    }, 0);

    const savingsEnter = setTimeout(() => {
      setSavingsOpacity(1);
      setSavingsTop(0);
      setSavingsWidth("48%");
    }, 7000);

    const savingsExpand = setTimeout(() => {
      setSavingsWidth("100%");
    }, 10000);

    const savingsLeave = setTimeout(() => {
      setSavingsOpacity(0);
    }, 11000);

    return () => {
      clearTimeout(savingsInit);
      clearTimeout(savingsEnter);
      clearTimeout(savingsExpand);
      clearTimeout(savingsLeave);
    };
  }, []);

  return (
    <SavingsColumnWrapper
      style={{
        width: savingsWidth,
        opacity: savingsOpacity,
        top: savingsTop,
      }}
    >
      <SavingsColumn>
        <div>Savings</div>
      </SavingsColumn>
    </SavingsColumnWrapper>
  );
};

// the length of dataVision array

const SavingsColumnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: 0% 0%;
  transition: all ${columnTransition}ms;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${chartHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${chartHeightMobile}px;
  }
  /* background: red; */
`;

const SavingsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: inherit;
  /* width: 100%; */
  @media (min-width: ${BREAKPOINT}px) {
    height: ${chartHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${chartHeightMobile}px;
  }
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
  }
  background: ${BUTTON_COLOR_RED};
`;
