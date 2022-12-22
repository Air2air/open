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
  const [textAdvisoryOpacity, setTextAdvisoryOpacity] = useState(0);
  const [textDefineOpacity, setTextDefineOpacity] = useState(0);
  const [textLoopEndTime, setTextLoopEndTime] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {

    const loopIsStarting = setTimeout(() => {
      setTextLoopEndTime(0);
    }, 0);

    const textAdvisory = setTimeout(() => {
      setTextAdvisoryOpacity(1);
    }, 1000);

    const textAdvisoryEnd = setTimeout(() => {
      setTextAdvisoryOpacity(0);
    }, 6000);

    const textDefine = setTimeout(() => {
      setTextDefineOpacity(1);
    }, 7000);

    const textDefineEnd = setTimeout(() => {
      setTextDefineOpacity(0);
    }, LoopEndTime - 1000);

    const loopIsOver = setTimeout(() => {
      setTextLoopEndTime(1);
      setCount(count + 1);
    }, LoopEndTime);


    return () => {
      clearTimeout(loopIsStarting);
      clearTimeout(textAdvisory);
      clearTimeout(textAdvisoryEnd);
      clearTimeout(textDefine);
      clearTimeout(textDefineEnd);
      clearTimeout(textLoopEndTime);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <TextSection style={{ opacity: textAdvisoryOpacity }}>
        <TitleBanner title="Eleven is a healthcare AI advisory" />
        <BannerText text="of the leading physicians, scientists, engineers and entrepreneurs in healthcare AI." />
      </TextSection>
      <TextSection style={{ opacity: textDefineOpacity }}>
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
