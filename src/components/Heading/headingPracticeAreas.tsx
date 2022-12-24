import { TitleHeading } from "components/Title/titleHeading";
import { SubHeadHeading } from "components/SubHeading/subHeadHeading";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_TEXT_TRANSITION,
  HEADING_HEIGHT_DESKTOP,
  HEADING_HEIGHT_MOBILE,
} from "constants/index";
import { LoopEndTime } from "../Chart/Vision/chartVision";
import Container from "components/Container/container";

const HeadingPracticeAreas = (props: { backgroundColor?: any }) => {
  const [advisoryOpacity, setAdvisoryOpacity] = useState(0);
  const [defineOpacity, setDefineOpacity] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const advisoryStart = setTimeout(() => {
      setAdvisoryOpacity(1);
    }, 1000);

    const advisoryEnd = setTimeout(() => {
      setAdvisoryOpacity(0);
    }, 6000);

    const defineStart = setTimeout(() => {
      setDefineOpacity(1);
    }, 7000);

    const defineEnd = setTimeout(() => {
      setDefineOpacity(0);
    }, LoopEndTime - 1000);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(advisoryStart);
      clearTimeout(advisoryEnd);
      clearTimeout(defineStart);
      clearTimeout(defineEnd);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
      <Wrapper>
        <TextSection style={{ opacity: advisoryOpacity }}>
          <TitleHeading title="Elevens is a healthcare AI advisory" />
          <SubHeadHeading text="Elevens juggles the talent and resources for each practice area to optimize outcome." />
        </TextSection>
        <TextSection style={{ opacity: defineOpacity }}>
          <TitleHeading title="We define the path forward" />
          <SubHeadHeading text="We call this process ''fractional C{x}AIOs''." />
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

export default HeadingPracticeAreas;
