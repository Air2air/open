import { LogoText } from "components/Logo/logoText";

import styled from "styled-components";

import {COLOR_HEADER, CONTENT_WIDTH_DESKTOP } from "styles/Constants";
import { useState } from "react";
import { HamburgerButton } from "./hamburger";

export const HEADER_HEIGHT_DESKTOP = 70;
export const HEADER_LOGO_HEIGHT_DESKTOP = HEADER_HEIGHT_DESKTOP * 0.6;

export const HeaderDesktop = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  // toggle the NavPanel show state with a click handler

  return (
    <>
      <HeaderOuter>
        <HeaderInner>
          <HeaderLeft>
            <LogoText size={HEADER_LOGO_HEIGHT_DESKTOP} />
          </HeaderLeft>
          <HeaderRight onClick={handleClick}>
            <HamburgerButton size={HEADER_LOGO_HEIGHT_DESKTOP} />
          </HeaderRight>
        </HeaderInner>
      </HeaderOuter>
      <NavPanelOuter style={{ height: show ? "300px" : "0" }}>
        <NavPanelInner>Nav panel</NavPanelInner>
      </NavPanelOuter>
    </>
  );
};

const HeaderOuter = styled.div`
  z-index: +2;
  position: fixed;
  top: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  /* background-color: green; */
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${CONTENT_WIDTH_DESKTOP};
  height: ${HEADER_HEIGHT_DESKTOP}px;
  margin: 0 auto;
  padding: 0;
  /* background-color: blue; */
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  padding: 0;
  width: auto;
  /* background: brown; */
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  padding: 0;
  /* background: #000; */
`;

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
  background: ${COLOR_HEADER}
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
