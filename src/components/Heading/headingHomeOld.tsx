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
import { LoopEndTime } from "../Chart/Home/chartHome";
import Container from "components/Container/container";

const HeadingHomeOld = (props: { backgroundColor?: any }) => {
  const [textFasterOpacity, setTextFasterOpacity] = useState(0);
  const [textTimelineOpacity, setTextTimelineOpacity] = useState(0);
  const [textRiskOpacity, setTextRiskOpacity] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTextFasterOpacity(0);
    setTextTimelineOpacity(0);
    setTextRiskOpacity(0);

    const textFasterStart = setTimeout(() => {
      setTextFasterOpacity(1);
    }, 1000);

    const textFasterEnd = setTimeout(() => {
      setTextFasterOpacity(0);
    }, 5000);

    const textTimelineStart = setTimeout(() => {
      setTextTimelineOpacity(1);
    }, 6000);

    const textTimelineEnd = setTimeout(() => {
      setTextTimelineOpacity(0);
    }, 9000);

    const textRiskStart = setTimeout(() => {
      setTextRiskOpacity(1);
    }, 10000);

    const textRiskEnd = setTimeout(() => {
      setTextRiskOpacity(0);
    }, LoopEndTime - 500);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(textFasterStart);
      clearTimeout(textFasterEnd);
      clearTimeout(textTimelineStart);
      clearTimeout(textTimelineEnd);
      clearTimeout(textRiskStart);
      clearTimeout(textRiskEnd);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
      <Wrapper>
        <TextSection style={{ opacity: textFasterOpacity }}>
          <TitleHeading title="Faster liquidity for Health AI ventures" />
          <SubHeadHeading text="Home your timeline and slash dilution, risk and time." />
        </TextSection>
        <TextSection style={{ opacity: textTimelineOpacity }}>
          <TitleHeading title="We cut your timeline to liquidity" />
          <SubHeadHeading text="With world class, professional oversight." />
        </TextSection>
        <TextSection style={{ opacity: textRiskOpacity }}>
          <TitleHeading title="Reducing Risk, Dilution and Time." />
          <SubHeadHeading text="Getting you to the goal line for a fraction of the cost. " />
        </TextSection>
      </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  top: 0;
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
  width:100%;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: ${HEADING_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: ${HEADING_HEIGHT_MOBILE}px;
  }
  /* background: green; */
`;

export default HeadingHomeOld;
