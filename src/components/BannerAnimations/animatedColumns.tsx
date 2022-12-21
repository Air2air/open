/* Create a React component named AnimatedColumns that uses styled-components and the useSpring hook. The component should render a div containing 7 child divs aligned in one row.  The width of the last child div should equal 50% of the parent div width. */
import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const AnimatedColumns = () => {
  const props = useSpring({
    from: { width: "0%" },
    to: { width: "50%" },
  });
  return (
    <Columns>
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <animated.div style={props} />
    </Columns>
  );
};

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
`;
const Column = styled.div`
  width: 14.28%;
  height: 100px;
  background: #f0f0f0;
`;
export default AnimatedColumns;
