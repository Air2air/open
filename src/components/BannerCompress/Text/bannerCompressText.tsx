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
  const [textCXAIOOpacity, setTextCXAIOOpacity] = useState(0);
  const [textHowOpacity, setTextHowOpacity] = useState(0);
  const [textEndLoop, setTextEndLoop] = useState(0);

  useEffect(() => {
    const textReset = setTimeout(() => {
      setTextFasterOpacity(0);
      setTextCutTimelineOpacity(0);
      setTextCXAIOOpacity(0);
      setTextHowOpacity(0);
      setTextEndLoop(0);
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

    const textCXAIO = setTimeout(() => {
      setTextCXAIOOpacity(1);
    }, 13000);

    const textCXAIOEnd = setTimeout(() => {
      setTextCXAIOOpacity(0);
    }, 18000);

    const textHow = setTimeout(() => {
      setTextHowOpacity(1);
    }, 19000);

    const textHowEnd = setTimeout(() => {
      setTextHowOpacity(0);
    }, 24000);

    const textEndLoop = setTimeout(() => {
      setTextEndLoop(1);
    }, 24000);

    return () => {
      clearTimeout(textReset);
      clearTimeout(textFaster);
      clearTimeout(textFasterEnd);
      clearTimeout(textCutTimeline);
      clearTimeout(textCutTimelineEnd);
      clearTimeout(textCXAIO);
      clearTimeout(textCXAIOEnd);
      clearTimeout(textHow);
      clearTimeout(textHowEnd);
      clearTimeout(textEndLoop);
    };
  }, [textEndLoop]);

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
      <TextSection style={{ opacity: textCXAIOOpacity }}>
        <TitleBanner title="Reducing Risk, Dilution and Time." />
        <BannerText text="Getting you to the goal line for a fraction of the cost. " />
      </TextSection>
      <TextSection style={{ opacity: textHowOpacity }} >
        <TitleBanner title="How does it work?" />
        <BannerText text="Your CXAIO advises you through every step of your venture." />
      </TextSection>
      <div style={{width:textEndLoop}} />
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
