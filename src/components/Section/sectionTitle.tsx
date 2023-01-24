import styled from "styled-components";
import { COLOR_BANNER_HEADING } from "styles/Colors";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import {
  FONT_BANNER_HEADING_DESKTOP,
  FONT_BANNER_HEADING_MOBILE,
} from "styles/Text";
import { setOpacity } from "./setOpacity";

export const SectionTitle = (props) => {
  function roundPercentage(percentage) {
    return Math.round(percentage * 1000) / 600;
  }

  function plusOrMinusX(from) {
    if (from === "left") {
      return `-${roundPercentage(props.percentage) * props.translateX}%`;
    } else return `${roundPercentage(props.percentage) * props.translateX}%`;
  }

  function plusOrMinusY(from) {
    if (from === "top") {
      return `${(roundPercentage(props.percentage) * props.translateY)}%`;
    } else return `-${(roundPercentage(props.percentage) * props.translateY)}%`;
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: plusOrMinusX(props.fromX),
          top: plusOrMinusY(props.fromY),
          opacity: setOpacity(props.percentage),
          minWidth: "80%",
        }}
      >
        <TitleContainer>
          {props.text} 
        </TitleContainer>
      </div>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  background-color: hsla(0, 0%, 10%, 0.7);
  color: ${COLOR_BANNER_HEADING};
  @media (min-width: ${BREAKPOINT}px) {
    width: auto; //${CONTENT_WIDTH_DESKTOP};
    ${FONT_BANNER_HEADING_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: auto; //${CONTENT_WIDTH_MOBILE};
    ${FONT_BANNER_HEADING_MOBILE};
  }
  /* background: green; */
`;
