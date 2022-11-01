import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_text_white.svg";
import {
  COLOR_BASE,
  COLOR_BLACK,
  COLOR_TEXT,
  HEADER_MOBILE_HEIGHT,
  HEADER_MOBILE_HEIGHT_PX,
} from "../../styles/Constants";

export const HeaderMobile = () => {
  /*------ Responsive -------*/

  return (
    <>
      <HeaderOuter>
        <HeaderInner>
          <LogoWrapper>
            <Link to="/home">
              <LogoWhite width="140px" />
            </Link>
          </LogoWrapper>
          <HeaderLinkRow>
          <HeaderLink to="/what_we_do">What we do</HeaderLink>
          <HeaderLink to="/markets">Markets</HeaderLink>
          <HeaderLink to="/vision">Vision</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
          </HeaderLinkRow>
        </HeaderInner>
      </HeaderOuter>
    </>
  );
};

const headerButtonHeight =  HEADER_MOBILE_HEIGHT * .6;
const headerButtonHeightPx =  headerButtonHeight + "px";

const HeaderOuter = styled.div`
  z-index: +2;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0;
  height: ${HEADER_MOBILE_HEIGHT_PX};
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  height: ${HEADER_MOBILE_HEIGHT_PX};
  margin: 0 auto;
  padding: 0;
  background: ${COLOR_BLACK};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: ${HEADER_MOBILE_HEIGHT_PX};
  padding: 0 0 4px 0;
  opacity: 0.7;
  transform: scale(1);
  transition: all 300ms;
  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }
  /* background-color: blue; */
`;

const HeaderLinkRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${headerButtonHeightPx};
`;

const HeaderLink = styled(Link)`
  font-family: "Roboto Condensed", sans-serif;
  flex-wrap: nowrap;
  color: ${COLOR_TEXT};
  font-size: .95em;
  font-weight: 500;
  padding: 0 10px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  height: ${headerButtonHeightPx};
  background: ${COLOR_BLACK};
  transition: all 300ms;
  &:hover {
    background: ${COLOR_BASE};
  }
`;
