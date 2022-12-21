import { TitleBanner } from "components/Title/titleBanner";
import { BannerText } from "components/BannerText/bannerText";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BREAKPOINT } from "styles/Constants";
import {
  chartTextHeightDesktop,
  chartTextHeightMobile,
  textTransition,
} from "../Wrapper/config";

const BannerCompressText = () => {
  const [textFasterOpacity, setTextFasterOpacity] = useState(0);
  const [textCutTimelineOpacity, setTextCutTimelineOpacity] = useState(0);
  const [textCXAIOOpacity, setTextCXAIOOpacity] = useState(0);
  const [textHowOpacity, setTextHowOpacity] = useState(0);
  const [textHowWidth, setTextHowWidth] = useState('100%');

  useEffect(() => {
    const textReset = setTimeout(() => {
      setTextFasterOpacity(0);
      setTextCutTimelineOpacity(0);
      setTextCXAIOOpacity(0);
      setTextHowOpacity(0);
    }, 0);

    const textFaster = setTimeout(() => {
      setTextFasterOpacity(1);
    }, 1000);

    const textFasterReset = setTimeout(() => {
      setTextFasterOpacity(0);
    }, 6000);

    const textCutTimeline = setTimeout(() => {
      setTextCutTimelineOpacity(1);
    }, 7000);

    const textCutTimelineReset = setTimeout(() => {
      setTextCutTimelineOpacity(0);
    }, 12000);

    const textCXAIO = setTimeout(() => {
      setTextCXAIOOpacity(1);
    }, 13000);

    const textCXAIOReset = setTimeout(() => {
      setTextCXAIOOpacity(0);
    }, 17000);

    const textHow = setTimeout(() => {
      setTextHowOpacity(1);
    }, 18000);

    const textHowFade = setTimeout(() => {
      setTextHowOpacity(0);
    }, 22000);

    return () => {
      clearTimeout(textReset);
      clearTimeout(textFaster);
      clearTimeout(textFasterReset);
      clearTimeout(textCutTimeline);
      clearTimeout(textCutTimelineReset);
      clearTimeout(textCXAIO);
      clearTimeout(textCXAIOReset);
      clearTimeout(textHow);
      clearTimeout(textHowFade);
    };
  }, []);

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
      <TextSection style={{ opacity: textHowOpacity, width: textHowWidth }}>
        <TitleBanner title="How does it work?" />
        <BannerText text="Your CXAIO advises you through every step of your venture." />
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
  transition: all ${textTransition}ms;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${chartTextHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${chartTextHeightMobile}px;
  }
  /* background: green; */
`;

export default BannerCompressText;
