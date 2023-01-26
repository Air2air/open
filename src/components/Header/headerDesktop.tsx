import styled from "styled-components";
import { CONTENT_WIDTH_DESKTOP } from "styles/Constants";
import { useState } from "react";
import { HamburgerButton } from "./hamburger";
import { LogoTextAnimated } from "components/Logo/logoTextAnimated";
import { NavPanel } from "./navPanel";

export const HEADER_HEIGHT_DESKTOP = 70;
export const HEADER_LOGO_HEIGHT_DESKTOP = HEADER_HEIGHT_DESKTOP * 0.6;

export const HeaderDesktop = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <HeaderOuter>
        <HeaderInner>
          <HeaderLeft>
            <LogoTextAnimated size={HEADER_LOGO_HEIGHT_DESKTOP} />
          </HeaderLeft>
          <HeaderRight onClick={handleClick}>
            <HamburgerButton size={36} />
          </HeaderRight>
        </HeaderInner>
      </HeaderOuter>
      <NavPanel show={show} />
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
