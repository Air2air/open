import styled from "styled-components";

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
  background: "#333";
  /* background: red; */
`;

