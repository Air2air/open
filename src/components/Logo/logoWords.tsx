import { useState } from "react";
import styled from "styled-components";

const backgroundImageText = "url(/images/site/logo_text.svg)";
const backgroundImagePen = "url(/images/site/logo_pen.svg)";
const backgroundImageWords = "url(/images/site/logo_words.svg)";

const TRANSITION_SPEED = "0";

export const LogoWords = (props) => {
  const [showWords, setShowWords] = useState(true);

  const handleMouseEnter = () => {
    setShowWords(false);
  };

  const handleMouseLeave = () => {
    setShowWords(true);
  };

  const divWidthO = props.size * 0.91;
  const divWidthPen = props.size * 2.3;
  const divWidthWords = props.size * 14;

  return (
    <LogoTextWrapper
      style={{
        height: props.size + "px",
        width: props.size * 15 + "px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <O
        id="O"
        style={{
          height: props.size + "px",
          width: divWidthO + "px",
          backgroundSize: props.size * 4 + "px",
          backgroundPositionY: 0,
        }}
      />

      <Pen
        id="Pen"
        style={{
          left: props.size * 0.9 + "px",
          height: props.size + "px",
          width: showWords ? 0 : divWidthPen + "px",
          backgroundSize: props.size * 2 + "px",
          backgroundPositionY: 0,
        }}
      />
      <Words
        id="Words"
        style={{
          left: props.size * 0.9 + "px",
          height: props.size + "px",
          width: showWords ? divWidthWords + "px" : 0,
          backgroundSize: props.size * 13 + "px",
          backgroundPositionY: 0,
        }}
      />
    </LogoTextWrapper>
  );
};

const LogoTextWrapper = styled.div`
  position: relative; /* min-width: 290px; */
  pointer-events: all;
  /* background: red; */
`;

const O = styled.div`
  position: absolute;
  left: 0;
  background: ${backgroundImageText} no-repeat;
  overflow: visible;
  cursor: pointer;
`;

const Pen = styled.div`
  position: absolute;
  width: 0;
  background: ${backgroundImagePen} no-repeat;
  transition: width ${TRANSITION_SPEED} ease-in-out;

  cursor: pointer;
`;

const Words = styled.div`
  position: absolute;
  width: 0;
  background: ${backgroundImageWords} no-repeat;
  transition: width ${TRANSITION_SPEED} ease-in-out;
  overflow: visible;
  cursor: pointer;
`;
