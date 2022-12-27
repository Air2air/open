import {
  BREAKPOINT,
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
  COLOR_WHITE,
} from "constants/index";
import styled from "styled-components";

export const ColumnLabel = (props: {
  index: any;
  hidden?: boolean;
  rotate?: boolean;
  label: string;
}) => {
  return (
    <LabelWrapper key={props.index}>
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
  position: relative;
  height: 100%;
  width: 100%;
  z-index: +2;
  @media (min-width: ${BREAKPOINT}px) {
    padding-top: 10px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    top: 30%;
  }
  /* background: red; */
`;

export const LabelDiv = styled.div`
  position: relative;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color: ${COLOR_WHITE};
  @media (min-width: ${BREAKPOINT}px) {
    top: 0;
    width: 100%;
    font-size: ${CHART_LABEL_DESKTOP};
    text-align: center;
  }
  @media (max-width: ${BREAKPOINT}px) {
    left: 0%;
    top: 0;
    transform-origin: 25% 18%;
    transform: rotate(90deg);
    font-size: ${CHART_LABEL_MOBILE};
    min-width: 130px;
  }
  /* background: green; */
`;
