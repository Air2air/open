import { TitleBanner } from "components/Title/titleBanner";
import { BannerText } from "components/BannerText/bannerText";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BREAKPOINT } from "constants/index";
import {
  CHART_TEXT_HEIGHT_DESKTOP,
  CHART_TEXT_HEIGHT_MOBILE,
  CHART_TEXT_TRANSITION,
} from "constants/index";

const BannerCompressText = () => {
  const [textFasterOpacity, setTextFasterOpacity] = useState(0);
  const [textCutTimelineOpacity, setTextCutTimelineOpacity] = useState(0);
  const [textRiskOpacity, setTextRiskOpacity] = useState(0);
  const [textLoopEndTime, setTextLoopEndTime] = useState(0);

  useEffect(() => {
    const textReset = setTimeout(() => {
      setTextFasterOpacity(0);
      setTextCutTimelineOpacity(0);
      setTextRiskOpacity(0);
      setTextLoopEndTime(0);
    }, 0);

    const textFaster = setTimeout(() => {
      setTextFasterOpacity(1);
    }, 1000);

    const textFasterEnd = setTimeout(() => {
      setTextFasterOpacity(0);
    }, 6000);

    const textCutTimeline = setTimeout(() => {
      setTextCutTimelineOpacity(1);
    }, 7000);

    const textCutTimelineEnd = setTimeout(() => {
      setTextCutTimelineOpacity(0);
    }, 12000);

    const textRisk = setTimeout(() => {
      setTextCutTimelineOpacity(1);
    }, 13000);

    const textRiskEnd = setTimeout(() => {
      setTextCutTimelineOpacity(0);
    }, 18000);
 
    const textLoopEndTime = setTimeout(() => {
      setTextLoopEndTime(1);
    }, 18000);

    return () => {
      clearTimeout(textReset);
      clearTimeout(textFaster);
      clearTimeout(textFasterEnd);
      clearTimeout(textCutTimeline);
      clearTimeout(textCutTimelineEnd);
      clearTimeout(textRisk);
      clearTimeout(textRiskEnd);
      clearTimeout(textLoopEndTime);
    };
  }, [textLoopEndTime]);

  return (
    <>
      <TextSection style={{ opacity: textFasterOpacity }}>
        <TitleBanner title="Faster liquidity for Health AI ventures" />
        <BannerText text="Compress your timeline and slash dilution, risk and time." />
      </TextSection>
      <TextSection style={{ opacity: textCutTimelineOpacity }}>
        <TitleBanner title="We cut your timeline to liquidity" />
        <BannerText text="With world class, professional oversight." />
      </TextSection>
      <TextSection style={{ opacity: textRiskOpacity }}>
        <TitleBanner title="Reducing Risk, Dilution and Time." />
        <BannerText text="Getting you to the goal line for a fraction of the cost. " />
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

export default BannerCompressText;
