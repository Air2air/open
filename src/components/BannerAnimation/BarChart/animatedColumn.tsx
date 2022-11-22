import { useEffect, useState } from "react";
import styled from "styled-components";
import { BREAKPOINT_PX } from "styles/Constants";

// create a div with a random height that changes randomly between 0 and 100 seconds  (0-100000ms)
const AnimatedColumn = (props: {
  id: any;
  title: string;
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
      <ColumnWrapper>
        <ColumnBackgroundColor
          id={props.id}
          style={{
            backgroundColor: props.backgroundColor,
            height: height + "%",
          }}
        />
        <ColumnLabelHolder
          id={props.id}
          style={{
            height: height + "%",
          }}
        >
          <Label
            style={{
              color: props.color,
            }}
          >
            {props.title}
          </Label>
        </ColumnLabelHolder>
      </ColumnWrapper>
    </>
  );
};

const ColumnWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  /* background: red; */
  @media (min-width: ${BREAKPOINT_PX}) {
    padding: 10px 4px;
    min-width: 90px;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    padding: 0;
    min-width: 44px;
  }
`;

const ColumnLabelHolder = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  transition: all 200ms;
  @media (min-width: ${BREAKPOINT_PX}) {
    bottom: 0;
    min-height: 30%;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    min-height: 40%;
  }
  /* background: blue; */
`;

const Label = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  position: absolute;
  top: 5px;
  padding: 0;
  z-index: +1;
  transition: all 200ms;
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 1rem;
    padding-top: 10px;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 0.94rem;
    line-height: 0.94rem;
    height: 0.94rem;
    transform: rotate(90deg);
  }
  /* background: red; */
`;

const ColumnBackgroundColor = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 2px;
  transition: all 200ms;
  @media (min-width: ${BREAKPOINT_PX}) {
    bottom: 0;
    min-height: 30%;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    min-height: 40%;
    padding-top: 40px;
  }
`;

export default AnimatedColumn;
