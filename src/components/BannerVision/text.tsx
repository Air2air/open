import { TitleBanner } from "components/Title/titleBanner";
import { BannerText } from "components/BannerText/bannerText";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_TEXT_HEIGHT_DESKTOP,
  CHART_TEXT_HEIGHT_MOBILE,
  CHART_TEXT_TRANSITION,
} from "constants/index";
import { LoopEndTime } from "./bannerVision";

const BannerVisionText = () => {
  const [advisoryOpacity, setAdvisoryOpacity] = useState(0);
  const [defineOpacity, setDefineOpacity] = useState(0);
  const [textLoopEndTime, setTextLoopEndTime] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const loopIsStarting = setTimeout(() => {
      setTextLoopEndTime(0);
    }, 0);

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
      setTextLoopEndTime(1);
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(loopIsStarting);
      clearTimeout(advisoryStart);
      clearTimeout(advisoryEnd);
      clearTimeout(defineStart);
      clearTimeout(defineEnd);
      clearTimeout(textLoopEndTime);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <TextSection style={{ opacity: advisoryOpacity }}>
        <TitleBanner title="Elevens is a healthcare AI advisory" />
        <BannerText text="of the leading physicians, scientists, engineers and entrepreneurs in healthcare AI." />
      </TextSection>
      <TextSection style={{ opacity: defineOpacity }}>
        <TitleBanner title="We define the path forward" />
        <BannerText text=" for leading companies building the future of digital health and clinical machine learning." />
      </TextSection>
    </>
  );
};

const TextSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  transition: all ${CHART_TEXT_TRANSITION}ms;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_TEXT_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_TEXT_HEIGHT_MOBILE}px;
  }
  /* background: green; */
`;

export default BannerVisionText;
