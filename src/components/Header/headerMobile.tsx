import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "images/logo_text_white.svg";
import {
  COLOR_HEADER,
  COLOR_HEADER_HOVER,
  COLOR_LINK_REVERSE,
  COLOR_LINK_REVERSE_HOVER,
  COLOR_TEXT,
  COLOR_TEXT_REVERSE,
  FONT_CAPTION_MOBILE,
} from "styles/Constants";

export const HEADER_HEIGHT_MOBILE = 120;

export const HeaderMobile = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTop>
          <LogoWrapper>
            <Link to="/home">
              <div style={{ width: "140px" }}>
                <LogoWhite />
              </div>
            </Link>
          </LogoWrapper>
        </HeaderTop>
        <HeaderBottom>
          <HeaderLink to="/getinvolved">Work</HeaderLink>
          <HeaderLink to="/research">Research</HeaderLink>
          <HeaderLink to="/policy">Policy</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </HeaderBottom>
      </HeaderContainer>
    </>
  );
};

const headerTopHeight = HEADER_HEIGHT_MOBILE * 0.5;
const headerTopHeightPx = headerTopHeight + "px";

const headerButtonHeight = HEADER_HEIGHT_MOBILE * 0.5;
const headerButtonHeightPx = headerButtonHeight + "px";

const HeaderContainer = styled.div`
  z-index: +2;
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  flex-direction: column;
  height: ${HEADER_HEIGHT_MOBILE}px;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0;
  height: ${headerTopHeightPx};
  background: ${COLOR_HEADER};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: ${headerTopHeightPx};
  padding: 4px 0 0 0;
  opacity: 0.7;
  transform: scale(1);
  transition: all 300ms;
  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }
  /* background-color: blue; */
`;

const HeaderBottom = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100vw;
  height: ${headerButtonHeightPx};
  padding: 0;
`;

const HeaderLink = styled(Link)`
  ${FONT_CAPTION_MOBILE};
  flex-wrap: nowrap;
  color: ${COLOR_LINK_REVERSE};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: ${headerButtonHeightPx};
  background: ${COLOR_HEADER};
  transition: all 300ms;
  &:hover {
    color: ${COLOR_LINK_REVERSE_HOVER};
    background: ${COLOR_HEADER_HOVER};
  }
`;
