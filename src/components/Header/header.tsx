import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_HEADER,
  COLOR_HEADER_CONTRAST,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  HEADER_HEIGHT,
} from "styles/Constants";
import { useEffect, useRef, useState } from "react";
import { HamburgerButton } from "./hamburger";
import { LogoWords } from "components/Logo/logoAnimation";
import { NavLinks } from "./navLinks";

export const HEADER_HEIGHT_CLOSED = HEADER_HEIGHT;
export const HEADER_LOGO_HEIGHT_DESKTOP = HEADER_HEIGHT_CLOSED * 0.32;
export const HEADER_LOGO_HEIGHT_MOBILE = HEADER_HEIGHT_CLOSED * 0.28;
export const NAV_PANEL_HEIGHT = 70;
export const NAV_PANEL_TOP = HEADER_HEIGHT_CLOSED;
export const HEADER_HEIGHT_OPEN = NAV_PANEL_HEIGHT + NAV_PANEL_TOP;

/*
using react typescript, code a website horizontal navigation panel that opens when an icon is hovered by the user.  The navigation panel closes when document scroll exceeds 100px.Animate the navigation panel open and closed.   The navigation panel should be a fixed position element.  The navigation panel should be positioned at the top of the screen.  The navigation panel should be positioned at the top of the screen. Also ensure that the panel does not close if the user's mouse is hovering over it.
*/

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setShowNav(true);
  };

  const handleMouseLeave = () => {
    //setShowNav(false);
    setShowNav(true);
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

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <HeaderOuter
        className="header"
        style={{ height: showNav ? HEADER_HEIGHT_OPEN : HEADER_HEIGHT_CLOSED }}
      >
        <HeaderTopBackground>
          <HeaderInner
            style={{
              width:
                width > BREAKPOINT
                  ? CONTENT_WIDTH_DESKTOP
                  : CONTENT_WIDTH_MOBILE,
            }}
          >
            <HeaderLeft>
              {width > BREAKPOINT ? (
                <LogoWords size={HEADER_LOGO_HEIGHT_DESKTOP} />
              ) : (
                <LogoWords size={HEADER_LOGO_HEIGHT_MOBILE} />
              )}
            </HeaderLeft>
            <HeaderRight
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <HamburgerButton size={HEADER_LOGO_HEIGHT_DESKTOP} />
            </HeaderRight>
          </HeaderInner>
        </HeaderTopBackground>
        <NavPanel
          style={{ height: showNav ? NAV_PANEL_HEIGHT : HEADER_HEIGHT_CLOSED }}
          ref={navRef}
        >
          <HeaderBottomBackground>
            <PanelContainer
              style={{
                width:
                  width > BREAKPOINT
                    ? CONTENT_WIDTH_DESKTOP
                    : CONTENT_WIDTH_MOBILE,
              }}
            >
              <NavLinks />
            </PanelContainer>
          </HeaderBottomBackground>
        </NavPanel>
      </HeaderOuter>
    </>
  );
};

export default Header;

const HeaderOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  transition: all 300ms;
  min-height: ${HEADER_HEIGHT_CLOSED}px;
  /* background-color: green; */
`;

const HeaderTopBackground = styled.div`
  width: 100%;
  background: ${COLOR_HEADER};
  /* background-color: green; */
`;

const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${HEADER_HEIGHT_CLOSED}px;
  margin: 0 auto;
  padding: 0;
`;

const HeaderLeft = styled.div`
  /* width: 30%; */
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: ${HEADER_HEIGHT_CLOSED}px;
  padding: 0;
  /* background: brown; */
`;

const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${HEADER_HEIGHT_CLOSED}px;
  padding: 0;
  /* background: #000; */
`;

const HeaderBottomBackground = styled.div`
  width: 100%;
  background: ${COLOR_HEADER_CONTRAST};
  /* background-color: green; */
`;

const NavPanel = styled.div`
  width: 100%;
  transition: all 0.5s;
  overflow: hidden;
  top: 0;
  /* background: blue;  */
`;

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${NAV_PANEL_HEIGHT}px;
  margin: 0 auto;
  padding: 0;
  /* background-color: blue; */
`;
