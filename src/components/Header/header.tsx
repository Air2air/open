import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_text_white.svg";
import {
  BREAKPOINT,
  BUTTON_COLOR,
  BUTTON_COLOR_HOVER,
  BUTTON_HEIGHT_PX,
  COLOR_BASE,
  COLOR_BASE_2,
  COLOR_TEXT,
  HEADER_HEIGHT_PX,
} from "../../styles/Constants";
import { useState, useEffect } from "react";

export const Header = () => {
  /*------ Scrolling -------*/
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true); //(true);
      return height;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });

  /*------ Responsive -------*/

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <HeaderWrapperOuter>
        {width > BREAKPOINT ? (
          <>
            {!isVisible && <HeaderOverlay />}
            <HeaderWrapperInner>
              <HeaderLeft>
                <LogoWrapper>
                  <Link to="/home">
                    <LogoWhite width="150" />
                  </Link>
                </LogoWrapper>
                <Link to="/contact">
                  <HeaderButton>Contact Us</HeaderButton>
                </Link>
              </HeaderLeft>
              <HeaderRight>
                <HeaderLink to="/vision">Vision</HeaderLink>
                <HeaderLink to="/markets">Markets</HeaderLink>
                <HeaderLink to="/about">About</HeaderLink>
              </HeaderRight>
            </HeaderWrapperInner>
          </>
        ) : null}
      </HeaderWrapperOuter>
    </>
  );
};

const HeaderWrapperOuter = styled.div`
  z-index: +2;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0;
  height: ${HEADER_HEIGHT_PX};
`;

const HeaderOverlay = styled.div`
  z-index: -1;
  position: absolute;
  width: 100vw;
  height: ${HEADER_HEIGHT_PX};
  background: ${COLOR_BASE};

`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT_PX};
  padding: 0;
  opacity: 0.7;
  transform: scale(1);
  transition: all 300ms;
  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }
  /* background-color: blue; */
`;

const HeaderWrapperInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  height: ${HEADER_HEIGHT_PX};
  margin: 0 auto;
  padding: 0;
  /* background-color: blue; */
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  justify-content: space-between;
  height: ${HEADER_HEIGHT_PX};
  padding: 0;
  /* background: #000; */
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT_PX};
  background: ${COLOR_BASE};
`;

const HeaderButton = styled.div`
  font-size: 1em;
  font-family: "Roboto Condensed", sans-serif;
  color: ${COLOR_TEXT};
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  height: ${BUTTON_HEIGHT_PX};
  transition: all 300ms;
  text-transform: uppercase;
  background: ${BUTTON_COLOR};
  &:hover {
    background: ${BUTTON_COLOR_HOVER};
  }
`;

const HeaderLink = styled(Link)`
  font-family: "Roboto Condensed", sans-serif;
  color: ${COLOR_TEXT};
  font-size: 1em;
  padding: 0 30px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  height: ${HEADER_HEIGHT_PX};
  background: ${COLOR_BASE};
  &:hover {
    background: ${COLOR_BASE_2};
  }
`;
