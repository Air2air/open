import { useEffect, useState } from "react";
import styled from "styled-components";

// create a div with a random height that changes randomly between 0 and 100 seconds  (0-100000ms)
const AnimatedColumn = (props: {
  id: any;
  label: string;
  color: string;
  bgColor: string;
}) => {
  const [height, setHeight] = useState(50);

  const randomHeight = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setHeight(randomNumber);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      randomHeight();
    }, Math.floor(Math.random() * 10000));
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ColumnWrapper
        style={{
          height: height + "%",
        }}
      >
        <Label
          style={{
            color: props.color,
          }}
        >
          {props.label}
        </Label>
        <ColumnBackground
          id={props.id}
          style={{
            backgroundColor: props.bgColor,
          }}
        />
      </ColumnWrapper>
    </>
  );
};

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  padding: 10px 4px;
  border-radius: 2px;
  transition: all 300ms;
`;

const ColumnBackground = styled.div`
  opacity: 0.4;
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 2px;
  /* transition: all 300ms; */
`;

const Label = styled.div`
  min-height: 30px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export default AnimatedColumn;
