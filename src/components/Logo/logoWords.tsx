import styled from "styled-components";

const backgroundImageText = "url(/images/site/logo_text.svg)";
const backgroundImagePen = "url(/images/site/logo_pen.svg)";
const backgroundImageWords = "url(/images/site/logo_words.svg)";

const TRANSITION_SPEED = "0.25s";

export const LogoWords = (props) => {
  const divWidthO = props.size * 0.91;
  const divWidthPen = props.size * 2.3;

  return (
    <LogoTextWrapper
      style={{
        height: props.size + "px",
        width: props.size * 15 + "px",
      }}
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
          width: divWidthPen + "px",
          backgroundSize: props.size * 2 + "px",
          backgroundPositionY: 0,
        }}
      />
      <Words
        id="Words"
        style={{
          left: props.size * 0.9 + "px",
          height: props.size + "px",
          backgroundSize: props.size * 13 + "px",
          backgroundPositionY: 0,
        }}
      />
    </LogoTextWrapper>
  );
};

const LogoTextWrapper = styled.div`
  position: relative; /* min-width: 290px; */
  transition: all ${TRANSITION_SPEED} ease-in-out;
  pointer-events: all;
  &:hover {
    transition: all ${TRANSITION_SPEED} ease-in-out;
    #Pen {
      display: none;
    }
    #Words {
      display: block;
      width: 100%;
    }
  }
  /* background: red; */
`;

const O = styled.div`
  position: absolute;
  left: 0;
  background: ${backgroundImageText} no-repeat;
  transition: all ${TRANSITION_SPEED} ease-in-out;
  transition-delay: 2000;
  overflow: visible;
  cursor: pointer;
`;

const Pen = styled.div`
  position: absolute;
  background: ${backgroundImagePen} no-repeat;
  transition: all ${TRANSITION_SPEED} ease-in-out;
  overflow: visible;
  cursor: pointer;
`;

const Words = styled.div`
  position: absolute;
  width: 0;
  background: ${backgroundImageWords} no-repeat;
  transition: all ${TRANSITION_SPEED} ease-in-out;
  overflow: visible;
  cursor: pointer;
`;
