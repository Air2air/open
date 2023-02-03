import styled from "styled-components";
import { COLOR_HEADER, CONTENT_WIDTH_DESKTOP } from "styles/Constants";
import { useEffect, useRef, useState } from "react";
import { HamburgerButton } from "./hamburger";
import { LogoWords } from "components/Logo/logoWords";
import { NavLinks } from "./navLinks";

export const HEADER_HEIGHT_CLOSED = 70;
export const HEADER_LOGO_HEIGHT_DESKTOP = HEADER_HEIGHT_CLOSED * 0.4;
export const NAV_PANEL_HEIGHT = 80;
export const NAV_PANEL_TOP = HEADER_HEIGHT_CLOSED;
export const HEADER_HEIGHT_OPEN = NAV_PANEL_HEIGHT + NAV_PANEL_TOP;

/*
using react typescript, code a website horizontal navigation panel that opens when an icon is hovered by the user.  The navigation panel closes when document scroll exceeds 100px.Animate the navigation panel open and closed.   The navigation panel should be a fixed position element.  The navigation panel should be positioned at the top of the screen.  The navigation panel should be positioned at the top of the screen. Also ensure that the panel does not close if the user's mouse is hovering over it.
*/

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setShowNav(true);
  };

  const handleMouseLeave = () => {
    setShowNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.pageYOffset > HEADER_HEIGHT_OPEN &&
        navRef.current &&
        !navRef.current.contains(document.activeElement)
      ) {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderOuter
        style={{ height: showNav ? HEADER_HEIGHT_OPEN : HEADER_HEIGHT_CLOSED }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <HeaderInner>
          <HeaderLeft>
            <LogoWords size={HEADER_LOGO_HEIGHT_DESKTOP} />
          </HeaderLeft>
          <HeaderRight>
            <HamburgerButton size={HEADER_LOGO_HEIGHT_DESKTOP} />
          </HeaderRight>
        </HeaderInner>
        <NavPanel
          style={{ height: showNav ? NAV_PANEL_HEIGHT : HEADER_HEIGHT_CLOSED }}
          ref={navRef}
        >
          <PanelContainer>
            <NavLinks />
          </PanelContainer>
        </NavPanel>
      </HeaderOuter>
    </>
  );
};

const HeaderOuter = styled.div`
  z-index: +2;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  transition: all 300ms;
  min-height: ${HEADER_HEIGHT_CLOSED}px;
  background: ${COLOR_HEADER};
  /* background-color: green; */
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${CONTENT_WIDTH_DESKTOP};
  height: ${HEADER_HEIGHT_CLOSED}px;
  margin: 0 auto;
  padding: 0;
  /* background-color: blue; */
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${HEADER_HEIGHT_CLOSED}px;
  padding: 0;
  width: auto;
  /* background: brown; */
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT_CLOSED}px;
  padding: 0;
  /* background: #000; */
`;

const NavPanel = styled.div`
  width: 100%;
  transition: all 0.5s;
  overflow: hidden;
  top: 0;
  /* background: blue;  */
`;

const PanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${CONTENT_WIDTH_DESKTOP};
  height: ${NAV_PANEL_HEIGHT}px;
  margin: 0 auto;
  padding: 0;
  /* background-color: blue; */
`;
