// import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import {
  BREAKPOINT_PX,
  COLOR_BASE_1,
  COLOR_BASE_3,
  COLOR_TEXT,
  COLOR_RED,
  COLOR_BASE_4,
  COLOR_BASE_5,
} from "./../../styles/Constants";
import { IGraphColumnProps } from "api/interfaces";

const SeriesColumn = (props: IGraphColumnProps) => {
  const colHeight = props.size + "%";
  return (
    <>
      <Column style={{ height: props.outerHeight }}>
        <SeriesLabel>{props.label}</SeriesLabel>
        <SeriesBar
          className="bar"
          animateIn="animate__fadeInUp"
          delay={0}
          style={{ height: colHeight }}
        >
          {props.value}
        </SeriesBar>
      </Column>
    </>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: "100%";
  transition: all 300ms;
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 1.2em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1em;
  }
  background: ${COLOR_BASE_1};
  &:hover {
    background: ${COLOR_BASE_3};
    .bar {
      background: ${COLOR_BASE_4};
    }
  }
  .bar {
    background: ${COLOR_BASE_5};
  }
`;

const SeriesBar = styled(AnimationOnScroll)`
  color: ${COLOR_TEXT};
  transition: all 300ms;
  text-align: center;
  margin-top: 5px;
  padding-top: 5px;
`;

const SeriesLabel = styled.div`
  color: ${COLOR_RED};
  text-align: center;
`;

export default SeriesColumn;
