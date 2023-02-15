import { useState } from "react";
import styled from "styled-components";
import "./animation.scss";

const backgroundImageText = "url(/images/site/logo_text.svg)";
const backgroundImagePen = "url(/images/site/logo_pen.svg)";
const backgroundImageWords = "url(/images/site/logo_words.svg)";


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
        // background: showWords ? "red" : "blue",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <O
        style={{
          height: props.size + "px",
          width: divWidthO + "px",
          backgroundSize: props.size * 4 + "px",
        }}
      />
      <Pen
        className={showWords ? "penExit" : "penEnter"}
        style={{
          left: props.size * 0.9 + "px",
          height: props.size + "px",
          width: divWidthPen + "px",
          backgroundSize: props.size * 2 + "px",
        }}
      />
      <Words
        className={showWords ? "wordsEnter" : "wordsExit"}
        style={{
          left: props.size * 0.9 + "px",
          height: props.size + "px",
          width: divWidthWords + "px",
          backgroundSize: props.size * 13 + "px",
        }}
      />
    </LogoTextWrapper>
  );
};

const LogoTextWrapper = styled.div`
  position: relative; /* min-width: 290px; */
  pointer-events: all;
  overflow: hidden;
  cursor: pointer;
`;

const O = styled.div`
  position: absolute;
  left: 0;
  background: ${backgroundImageText} no-repeat;
  overflow: visible;

`;

const Pen = styled.div`
  position: absolute;
  width: 0;
  background: ${backgroundImagePen} no-repeat;
  /* cursor: pointer; */
`;

const Words = styled.div`
  position: absolute;
  width: 0;
  background: ${backgroundImageWords} no-repeat;
  /* cursor: pointer; */
`;
