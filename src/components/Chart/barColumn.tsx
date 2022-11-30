import { BarColumnProps } from "api/interfaces";
import { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import { BREAKPOINT } from "styles/Constants";

const BarColumn = (props: BarColumnProps) => {
  const [seriesRandomHeight, setSeriesRandomHeight] = useState(50);

  const minHeight = 10;
  const maxHeight = 100;

  const randomHeight = () => {
    const randomNumber = Math.random() * (maxHeight - minHeight) + minHeight;
    setSeriesRandomHeight(randomNumber);
  };

  const minInterval = 500;
  const maxInterval = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      randomHeight();
    }, Math.random() * (maxInterval - minInterval) + minInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ColumnOuter>
        {props.randomHeight ? (
          <ColumnSeries
            style={{
              height: seriesRandomHeight + "%",
              backgroundColor: props.backgroundColor,
            }}
            animateIn="animate__fadeInUp"
            delay={300}
            offset={60}
          >
            <Label
              style={{
                color: props.color,
              }}
              animateIn="animate__fadeIn"
              delay={1000}
              offset={60}
            >
              {props.label}
            </Label>
          </ColumnSeries>
        ) : (
          <ColumnSeries
            style={{
              height: props.height + "%",
              backgroundColor: props.backgroundColor,
            }}
            animateIn="animate__fadeInUp"
            delay={300}
            offset={60}
          >
            <Label
              style={{
                color: props.color,
              }}
              animateIn="animate__fadeIn"
              delay={1000}
              offset={60}
            >
              {props.label}
            </Label>
          </ColumnSeries>
        )}
      </ColumnOuter>
    </>
  );
};

const barMinHeightDesktop = "28%";
const barMinHeightMobile = "28%";

const ColumnOuter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex: 1;
  @media (min-width: ${BREAKPOINT}px) {
    margin: 0 10px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    margin: 0 5px;
  }
  /* background: blue; */
`;

const ColumnSeries = styled(AnimationOnScroll)`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  transition: all 200ms;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: ${barMinHeightDesktop};
    align-items: flex-start;
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: ${barMinHeightMobile};
    align-items: flex-end;
  }
  /* background: blue; */
`;

const Label = styled(AnimationOnScroll)`
  min-width: 100px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 200ms;
  @media (min-width: ${BREAKPOINT}px) {
    font-height: 1rem;
    text-align: center;
    padding-top: 10px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    transform: translate(0, -280%) rotate(90deg);
    transform-origin: 50%;
    font-height: 0.94rem;
  }
  /* background: red; */
`;

export default BarColumn;
