import {
  BREAKPOINT,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
  COLOR_WHITE,
} from "constants/index";
import styled from "styled-components";
import { animationEnter, animationExit } from "./chartComponents";

export const ColumnLabel = (props: {
  index?: any;
  hidden?: boolean;
  rotate?: boolean;
  label?: string;
}) => {
  return (
    <LabelWrapper
      key={props.index}
      style={{
        animation: !props.hidden
          ? animationEnter(props.index)
          : animationExit(props.index),
        opacity: !props.hidden ? 0 : 1,
      }}
    >
      <LabelDiv
        style={{
          transform: props.rotate ? `rotate(90deg)` : "",
          display: !props.hidden ? "block" : "none",
        }}
      >
        {props.label}
      </LabelDiv>
    </LabelWrapper>
  );
};

export const LabelWrapper = styled.div`
  position: absolute;
  top:0;
  height: 100%;
  width: 100%;
  z-index: top;
  /* background: red; */
`;

export const LabelDiv = styled.div`
  position: absolute;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color: ${COLOR_WHITE};
  @media (min-width: ${BREAKPOINT}px) {
    bottom: 10%;
    width: 100%;
    font-size: ${CHART_LABEL_DESKTOP};
    text-align: center;
  }
  @media (max-width: ${BREAKPOINT}px) {
    left: 0%;
    bottom: 90%;
    text-align: right;
    transform-origin: 20% 18%;
    transform: rotate(90deg);
    font-size: ${CHART_LABEL_MOBILE};
    min-width: 160px;
  }
  /* background: green; */
`;
