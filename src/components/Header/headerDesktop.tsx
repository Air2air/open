import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "images/logo_text_white.svg";
import { COLOR_TEXT, FONT_CAPTION_DESKTOP } from "styles/Constants";
import { useState, useEffect } from "react";
import {
  HEADER_HEIGHT_DESKTOP,
  HEADER_COLOR,
  HEADER_COLOR_HOVER,
} from "./headerCSS";

export const HeaderDesktop = () => {
  /*------ Scrolling -------*/
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  const listenToScroll = () => {
    const heightToHideFrom = 100;
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

  return (
    <HeaderOuter>
      {!isVisible && <HeaderOverlay />}
      <HeaderInner>
        <HeaderLeft>
          <LogoWrapper>
            <Link to="/home">
              <div style={{ width: "140px" }}>
                <LogoWhite />
              </div>
            </Link>
          </LogoWrapper>
        </HeaderLeft>
        <HeaderRight>
          <HeaderLink to="/getinvolved">Get Involved</HeaderLink>
          <HeaderLink to="/research">Research</HeaderLink>
          <HeaderLink to="/education">Education</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </HeaderRight>
      </HeaderInner>
    </HeaderOuter>
  );
};

const HeaderOuter = styled.div`
  z-index: +2;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0;
  height: ${HEADER_HEIGHT_DESKTOP}px;
`;

const HeaderOverlay = styled.div`
  z-index: -1;
  position: absolute;
  width: 100vw;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  background: ${HEADER_COLOR};
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  margin: 0 auto;
  padding: 0;
  /* background-color: blue; */
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT_DESKTOP}px;
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

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  padding: 0;
  /* background: #000; */
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: ${HEADER_HEIGHT_DESKTOP}px;
`;

const HeaderLink = styled(Link)`
  ${FONT_CAPTION_DESKTOP};
  color: ${COLOR_TEXT};
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  background: ${HEADER_COLOR};
  transition: all 300ms;
  &:hover {
    background: ${HEADER_COLOR_HOVER};
  }
`;
