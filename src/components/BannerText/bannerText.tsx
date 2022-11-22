import {
  BREAKPOINT_PX,
  COLOR_TEXT,
  TEXT_OPACITY,
} from "./../../styles/Constants";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Typewriter from "typewriter-effect";
import { FC } from "react";

type BannerTextProps = {
  bannerText: string;
  typing: boolean;
};

export const BannerText: FC<BannerTextProps> = ({ bannerText, typing }) => (
  <AnimationOnScroll animateIn="animate__fadeIn" delay={400}>
    <TypeWriterWrapper>
      {typing ? (
        <>
          <Typewriter
            options={{
              autoStart: true,
              delay: 10,
              cursor: "",
              strings: [bannerText],
              skipAddStyles: true,
              devMode: false,
              deleteSpeed: 1000000,
            }}
          />
        </>
      ) : (
        { bannerText }
      )}
    </TypeWriterWrapper>
  </AnimationOnScroll>
);

const TypeWriterWrapper = styled.div`
  .Typewriter__wrapper {
    color: ${COLOR_TEXT};
    font-family: "Roboto", sans-serif;
    height: auto;
    text-align: left;
    opacity: ${TEXT_OPACITY};
    text-shadow: 0 0 3px #000;
    @media (min-width: ${BREAKPOINT_PX}) {
      font-size: 1.7em;
      line-height: 1.5em;
    }
    @media (max-width: ${BREAKPOINT_PX}) {
      font-size: 1.2em;
      font-weight: 400;
      line-height: 1.5em;
    }
  }
`;

