import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR_WHITE } from "styles/Colors";

export const HamburgerButton = (props) => {
  const burgerHeight = props.size + "px";
  const burgerWidth = props.size * 1.2 + "px";

  return (
    <Hamburger to="/" style={{ height: burgerHeight, width: burgerWidth }}>
      <div style={{ width: burgerWidth }} />
      <div style={{ width: burgerWidth }} />
      <div style={{ width: burgerWidth }} />
    </Hamburger>
  );
};

const Hamburger = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: scale(1);
  transition: all 300ms;

  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(1.08);
  }
  > div {
    height: 7px;
    background: ${COLOR_WHITE};
  }
  /* background: red; */
`;
