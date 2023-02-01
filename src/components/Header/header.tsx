import styled from "styled-components";
import { COLOR_HEADER, CONTENT_WIDTH_DESKTOP } from "styles/Constants";
import { useEffect, useRef, useState } from "react";
import { HamburgerButton } from "./hamburger";
import { LogoWords } from "components/Logo/logoWords";
import { NavPanel } from "./navPanel";

export const HEADER_HEIGHT_DESKTOP = 70;
export const HEADER_LOGO_HEIGHT_DESKTOP = HEADER_HEIGHT_DESKTOP * 0.4;
export const NAV_PANEL_HEIGHT = 240;
export const NAV_PANEL_TOP = HEADER_HEIGHT_DESKTOP;

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
        window.pageYOffset > NAV_PANEL_HEIGHT &&
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

  // show the NavPanel when hovering over the hamburger button.  when not hovering, hide it.

  return (
    <>
      <HeaderOuter>
        <HeaderInner         onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <HeaderLeft>
            <LogoWords size={HEADER_LOGO_HEIGHT_DESKTOP} />
          </HeaderLeft>
          <HeaderRight>
            <HamburgerButton size={HEADER_LOGO_HEIGHT_DESKTOP} />
          </HeaderRight>
        </HeaderInner >
      </HeaderOuter>
      <PanelCloser
        style={{ height: showNav ? NAV_PANEL_HEIGHT : HEADER_HEIGHT_DESKTOP }}
        ref={navRef}

      >
        <NavPanel height={showNav} />
      </PanelCloser>
    </>
  );
};

const HeaderOuter = styled.div`
  z-index: +2;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  background: ${COLOR_HEADER};
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

const PanelCloser = styled.div`
  transition: all 0.5s;
  overflow: hidden;
  top: 0;
  background: ${COLOR_HEADER};
`;
