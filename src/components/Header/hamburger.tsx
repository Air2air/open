import styled from "styled-components";
import { COLOR_WHITE } from "styles/Colors";

export const HamburgerButton = (props) => {
  const burgerHeight = props.size + "px";
  const burgerWidth = props.size * 1.2 + "px";
  const sliceHeight = props.size / 7 + "px";


  return (
    <Hamburger
      style={{ height: burgerHeight, width: burgerWidth }}
    >
      <div style={{ width: burgerWidth, height: sliceHeight }} />
      <div style={{ width: burgerWidth, height: sliceHeight }} />
      <div style={{ width: burgerWidth, height: sliceHeight }} />
    </Hamburger>
  );
};

const Hamburger = styled.div`
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
    background: ${COLOR_WHITE};
  }
  /* background: red; */
`;
