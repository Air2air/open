import styled from "styled-components";
import { COLOR_HEADER } from "styles/Colors";

export const NavPanel = () => {
  return <Panel>Doddle Pants</Panel>;
};

const Panel = styled.div`
  color: #fff;
  position: absolute;
  top: -250px;
  left: 0;
  width: 100%;
  padding: 20px;
  overflow: hidden;
  box-sizing: border-box;
  background: ${COLOR_HEADER}
  /* background: red; */
`;

