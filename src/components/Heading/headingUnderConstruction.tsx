import { TitleHeading } from "components/Title/titleHeading";
import { SubHeadHeading } from "components/SubHead/subHeadHeading";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_TEXT_TRANSITION,
  HEADING_HEIGHT_DESKTOP,
  HEADING_HEIGHT_MOBILE,
} from "constants/index";

import Container from "components/Container/container";

const LoopEndTime = 10000;

const HeadingUnderConstruction = (props: { backgroundColor?: any }) => {
  const [textUnderConstructionOpacity, setTextUnderConstructionOpacity] = useState(0);

  const [count, setCount] = useState(1);

  useEffect(() => {
    setTextUnderConstructionOpacity(0);

    const textUnderConstructionStart = setTimeout(() => {
      setTextUnderConstructionOpacity(1);
    }, 1000);

    const textUnderConstructionEnd = setTimeout(() => {
      setTextUnderConstructionOpacity(0);
    }, 5000);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(textUnderConstructionStart);
      clearTimeout(textUnderConstructionEnd);

      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection style={{ opacity: textUnderConstructionOpacity }}>
            <TitleHeading title="Elevens is Under Construction" />
            <SubHeadHeading text="Elevens supports Healthtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners" />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  top: 80px;
  height:100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${HEADING_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${HEADING_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
`;

const TextSection = styled.div`
  position: absolute;
  top: 0;
  transition: all ${CHART_TEXT_TRANSITION}ms;
  width: 100%;
  height:100%;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: ${HEADING_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: ${HEADING_HEIGHT_MOBILE}px;
  }
  /* background: green; */
`;

export default HeadingUnderConstruction;
