import {
  BREAKPOINT,
  BREAKPOINT_PX,
  COLOR_TEXT,
  TEXT_OPACITY,
} from "../../styles/Constants";
import styled from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FC } from "react";

const isMobile = BREAKPOINT > window.innerWidth;

type BannerTextProps = {
  bannerText: any;
  typing: boolean;
};

const mobileParams = `
    fontFamily: "Roboto, sans-serif",
    fontWeight: 300,
    fontSize: "1.7em",
    lineHeight: "1.5em",
    color: "red",
    opacity: 0.8
  `;

export const BannerText: FC<BannerTextProps> = ({ bannerText, typing }) => (
  <AnimationOnScroll animateIn="animate__fadeIn" delay={400}>
    {typing ? (
      <>
        <TypeWriterParagraph
          textStyle={{ mobileParams }}
          startDelay={1000}
          cursor=""
          cursorColor="rgba(0,0,0,0)"
          text={bannerText}
          typeSpeed={1}
        />
      </>
    ) : (
      <NotTypeWriterParagraph>{bannerText}</NotTypeWriterParagraph>
    )}
  </AnimationOnScroll>
);

const TypeWriterParagraph = styled(TypeWriterEffect)`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  line-height: 1.5em;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
`;

const NotTypeWriterParagraph = styled.div`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-size: 1.7em;
  line-height: 1.5em;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 2.6em;
    line-height: 1.5em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 2em;
    line-height: 1.5em;
  }
`;
