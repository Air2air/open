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
  const [textPathOpacity, setTextFasterOpacity] = useState(0);
  const [textDefineOpacity, setTextCutTimelineOpacity] = useState(0);
  const [textLoopEndTime, setTextLoopEndTime] = useState(0);

  useEffect(() => {
    const textReset = setTimeout(() => {
      setTextFasterOpacity(0);
      setTextCutTimelineOpacity(0);
      setTextLoopEndTime(0);
    }, 0);

    const textPath = setTimeout(() => {
      setTextFasterOpacity(1);
    }, 1000);

    const textPathEnd = setTimeout(() => {
      setTextFasterOpacity(0);
    }, 6000);

    const textDefine = setTimeout(() => {
      setTextCutTimelineOpacity(1);
    }, 7000);

    const textDefineEnd = setTimeout(() => {
      setTextCutTimelineOpacity(0);
    }, LoopEndTime - 2000);

    const textLoopEndTime = setTimeout(() => {
      setTextLoopEndTime(1);
    }, LoopEndTime);

    return () => {
      clearTimeout(textReset);
      clearTimeout(textPath);
      clearTimeout(textPathEnd);
      clearTimeout(textDefine);
      clearTimeout(textDefineEnd);
      clearTimeout(textLoopEndTime);
    };
  }, [textLoopEndTime]);

  return (
    <>
      <TextSection style={{ opacity: textPathOpacity }}>
        <TitleBanner title="Eleven is a healthcare AI advisory" />
        <BannerText text="of the leading physicians, scientists, engineers and entrepreneurs in healthcare AI." />
      </TextSection>
      <TextSection style={{ opacity: textDefineOpacity }}>
        <TitleBanner title="We define the path forward" />
        <BannerText text=" for leading companies building the future of digital health and clinical machine learning." />
      </TextSection>
      <div style={{width:textLoopEndTime}} />
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
