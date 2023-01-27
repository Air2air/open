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
    return Math.round(percentage * 1000) / 10;
  }

  function upOrDown(direction) {
    if (direction !== "down") {
      return `top: ${roundPercentage(props.percentage)}%`;
    } else return `top: -${roundPercentage(props.percentage)}%`;
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: upOrDown(props.direction),
          opacity: setOpacity(props.percentage),
          zIndex: 1,
        }}
      >
        <TitleContainer style={{ color: props.color }}>
          {props.text} {roundPercentage(props.percentage)}{" "}
          {upOrDown(props.direction)}
        </TitleContainer>
      </div>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: left;

  /* color: ${COLOR_BANNER_HEADING}; */
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
