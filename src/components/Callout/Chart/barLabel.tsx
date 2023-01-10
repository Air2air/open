import {
  BREAKPOINT,
  COLOR_WHITE,
  FONT_CAPTION_DESKTOP,
  FONT_CAPTION_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import { animationEnter, CHART_HEIGHT_MOBILE } from "./chartComponents";


export const BarLabel = (props: {
  index?: any;
  label?: string;
  hidden?: boolean;
  rotate?: boolean;
}) => {
  return (
    <LabelWrapper
      key={props.index}
      style={{
        animation: !props.hidden ? animationEnter(props.index) : "",
      }}
    >
      <LabelDiv
        style={{
          transform: props.rotate ? `rotate(90deg)` : "",
        }}
      >
        {props.label}
      </LabelDiv>
    </LabelWrapper>
  );
};

export const LabelWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: +1;
  opacity: 0;
  /* display: none; */
  /* background: red; */
`;

export const LabelDiv = styled.div`
  position: absolute;
  text-transform: uppercase;
  color: ${COLOR_WHITE};
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_CAPTION_DESKTOP};
    bottom: 10%;
    width: 100%;
    text-align: center;
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_CAPTION_MOBILE};
    left: 0%;
    bottom: ${CHART_HEIGHT_MOBILE + 20}px;
    text-align: right;
    transform-origin: 20% 18%;
    transform: rotate(90deg);
    min-width: 160px;
  }
  /* background: green; */
`;
