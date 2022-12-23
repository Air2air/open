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
import { LoopEndTime } from "./bannerCompress";

const BannerCompressText = () => {
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
      <TextSection style={{ opacity: textFasterOpacity }}>
        <TitleBanner title="Faster liquidity for Health AI ventures" />
        <BannerText text="Compress your timeline and slash dilution, risk and time." />
      </TextSection>
      <TextSection style={{ opacity: textTimelineOpacity }}>
        <TitleBanner title="We cut your timeline to liquidity" />
        <BannerText text="With world class, professional oversight." />
      </TextSection>
      <TextSection style={{ opacity: textRiskOpacity }}>
        <TitleBanner title="Reducing Risk, Dilution and Time." />
        <BannerText text="Getting you to the goal line for a fraction of the cost. " />
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

export default BannerCompressText;
