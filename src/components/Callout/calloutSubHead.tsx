import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_BANNER_SUBHEAD,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_BANNER_SUBHEAD_DESKTOP,
  FONT_BANNER_SUBHEAD_MOBILE,
} from "styles/Constants";
import { setOpacity } from "./setOpacity";

export const CallOutSubhead = (props) => {
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
      return `${roundPercentage(props.percentage) * props.translateY}%`;
    } else return `-${roundPercentage(props.percentage) * props.translateY}%`;
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
        <SubheadContainer>{props.text}</SubheadContainer>
      </div>
    </>
  );
};

const SubheadContainer = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  background-color: hsla(0, 0%, 10%, 0.7);
  color: ${COLOR_BANNER_SUBHEAD};
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_DESKTOP}
    width: auto; //${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_MOBILE}
    width: auto; //${CONTENT_WIDTH_MOBILE};
  }
  /* background: red; */
`;
