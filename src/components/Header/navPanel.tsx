import { LogoText } from "components/Logo/logoText";

import styled from "styled-components";
import { COLOR_HEADER, CONTENT_WIDTH_DESKTOP } from "styles/Constants";


export const NavPanel = (props) => {
  return (
    <>
      <NavPanelOuter style={{ height: props.show ? "300px" : "0" }}>
        <NavPanelInner>Nav panel</NavPanelInner>
      </NavPanelOuter>
    </>
  );
};

const NavPanelOuter = styled.div`
  transition: height 300ms;
  z-index: +1;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 0;
  background: ${COLOR_HEADER};
`;

const NavPanelInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH_DESKTOP}px;
`;
