import styled from "styled-components";
import { BREAKPOINT } from "styles/Constants";
import { dataBenefits } from "./dataBenefits";
import { useState, useEffect } from "react";
import {
  chartHeightDesktop,
  chartHeightMobile,
  columnTransition,
} from "../Wrapper/config";

export const BenefitsColumns = () => {
  const [benefitsOpacity, setBenefitsOpacity] = useState(0);
  const [benefitsWidth, setBenefitsWidth] = useState("10%");
  const [benefitsTop, setBenefitsTop] = useState(-200);

  useEffect(() => {
    const benefitsInit = setTimeout(() => {
      setBenefitsOpacity(0);
      setBenefitsTop(-200);
    }, 0);

    const benefitsEnter = setTimeout(() => {
      setBenefitsOpacity(1);
      setBenefitsTop(0);
      setBenefitsWidth("47%");
    }, 8000);

    const benefitsExpand = setTimeout(() => {
      setBenefitsWidth("100%");
    }, 10000);

    const benefitsLeave = setTimeout(() => {
      setBenefitsTop(200);
    }, 17000);

    return () => {
      clearTimeout(benefitsInit);
      clearTimeout(benefitsEnter);
      clearTimeout(benefitsExpand);
      clearTimeout(benefitsLeave);
    };
  }, []);

  return (
    <BenefitsColumnWrapper
      style={{
        width: benefitsWidth,
        opacity: benefitsOpacity,
        top: benefitsTop,
      }}
    >
      {dataBenefits.map((item) => (
        <BenefitsColumn
          id="stages-column"
          key={item.id}
          style={{ backgroundColor: item.backgroundColor }}
        >
          {/* width: {width} */}
          <div>{item.label}</div>
        </BenefitsColumn>
      ))}
    </BenefitsColumnWrapper>
  );
};

// the length of dataCompress array
const dataCompressLength = dataBenefits.length;

const BenefitsColumnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
  /* background: red; */
`;

const BenefitsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: inherit;
  width: auto;
  & div {
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    word-wrap: break-word;
    padding:0 10px;
    @media (min-width: ${BREAKPOINT}px) {
      font-size: 1.1rem;
    }
    @media (max-width: ${BREAKPOINT}px) {
      font-size: 1rem;
      writing-mode: vertical-rl;
    }
    /* background: red; */
  }
`;
