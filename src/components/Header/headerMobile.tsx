import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_text_white.svg";
import {
  COLOR_TEXT,
  HEADER_COLOR,
  HEADER_COLOR_HOVER,
  HEADER_MOBILE_HEIGHT,
  HEADER_MOBILE_HEIGHT_PX,
} from "../../styles/Constants";

export const HeaderMobile = () => {
  /*------ Responsive -------*/

  return (
    <>
      <HeaderContainer>
        <HeaderTop>
          <LogoWrapper>
            <Link to="/home">
              <LogoWhite width="140px" />
            </Link>
          </LogoWrapper>
        </HeaderTop>
        <HeaderBottom>
          <HeaderLink to="/what_we_do">What we do</HeaderLink>
          <HeaderLink to="/markets">Markets</HeaderLink>
          <HeaderLink to="/vision">Vision</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </HeaderBottom>
      </HeaderContainer>
    </>
  );
};

const headerTopHeight = HEADER_MOBILE_HEIGHT * 0.5;
const headerTopHeightPx = headerTopHeight + "px";

const headerButtonHeight = HEADER_MOBILE_HEIGHT * 0.5;
const headerButtonHeightPx = headerButtonHeight + "px";

const HeaderContainer = styled.div`
  z-index: +2;
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  flex-direction: column;
  height: ${HEADER_MOBILE_HEIGHT_PX};
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0;
  height: ${headerTopHeightPx};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
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
  background: ${HEADER_COLOR};
`;

const HeaderLink = styled(Link)`
  font-family: "Roboto Condensed", sans-serif;
  flex-wrap: nowrap;
  color: ${COLOR_TEXT};
  font-size: 0.95em;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  height: ${headerButtonHeightPx};
  background: ${HEADER_COLOR};
  transition: all 300ms;
  &:hover {
    background: ${HEADER_COLOR_HOVER};
  }
`;
