import { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import { BREAKPOINT_PX } from "styles/Constants";


const BarColumnRandom = (props: {
  id: any;
  label: string;
  color: string;
  backgroundColor: string;
}) => {
  const [height, setHeight] = useState(50);

  const minHeight = 10;
  const maxHeight = 90;

  const randomHeight = () => {
    // const randomNumber = Math.floor(Math.random() * 100);
    const randomNumber = Math.random() * (maxHeight - minHeight) + minHeight;
    setHeight(randomNumber);
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
        <ColumnSeries
          style={{
            height: height + "%",
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
  height: 100%;
  flex: 1;
  @media (min-width: ${BREAKPOINT_PX}) {
    margin: 0 10px;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
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
  @media (min-width: ${BREAKPOINT_PX}) {
    min-height: ${barMinHeightDesktop};
    align-items: flex-start;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
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
  /* transition: all 200ms; */
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 1rem;
    text-align: center;
    padding-top: 10px;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    transform: translate(0, -440%) rotate(90deg);
    font-size: 0.94rem;
  }
  /* background: red; */
`;

export default BarColumnRandom;