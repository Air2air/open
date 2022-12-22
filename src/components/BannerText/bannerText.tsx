import { BREAKPOINT, COLOR_TEXT, TEXT_OPACITY } from "constants/index";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

type BannerTextProps = {
  text?: string;
  typing?: boolean;
};

export const BannerText = (props: BannerTextProps) => (
  <TextContainer className="animate__animated animate__fadeInUp animate__delay-500ms">
    <TypeWriterWrapper>
      {props.typing ? (
        <>
          <Typewriter
            options={{
              autoStart: true,
              delay: 10,
              cursor: "",
              strings: props.text,
              skipAddStyles: true,
              devMode: false,
              deleteSpeed: 1000000,
            }}
          />
        </>
      ) : (
        props.text
      )}
    </TypeWriterWrapper>
  </TextContainer>
);

const TypeWriterWrapper = styled.div`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
  text-shadow: 0 0 3px #000;
  /* background: red; */
  @media (min-width: ${BREAKPOINT}px) {
    font-size: 1.5em;
    line-height: 1.4em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 1.2em;
    font-weight: 400;
    line-height: 1.5em;
  }
`;

const TextContainer = styled.div`
  text-align: left;
  width: 100%;
  /* background: red; */
`;
