import { useEffect, useState } from "react";
import styled from "styled-components";

// create a div with a random height that changes randomly between 0 and 100 seconds  (0-100000ms)
const AnimatedColumn = (props: { id: any; label: string }) => {
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("red");

  const randomHeight = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setHeight(randomNumber);
  };

  const randomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  // call randomHeight() and randomColor() every 0-100000ms
  useEffect(() => {
    const interval = setInterval(() => {
      randomHeight();
      randomColor();
    }, Math.floor(Math.random() * 10000));
    return () => clearInterval(interval);
  }, []);

  // create a div with the random height and color
  return (
    <Column
      id={props.id}
      style={{
        height: height + "%",
        backgroundColor: "#" + color,
      }}
    >
      {props.label}
    </Column>
  );
};

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  min-width: 90px;
  padding:10px 2px;
  transition: all 300ms;
`;

export default AnimatedColumn;
