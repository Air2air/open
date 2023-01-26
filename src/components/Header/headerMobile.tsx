import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  COLOR_HEADER,
  COLOR_HEADER_HOVER,
  COLOR_LINK_REVERSE,
  COLOR_LINK_REVERSE_HOVER,
  FONT_CAPTION_MOBILE,
} from "styles/Constants";
import { LogoTextOnly } from "components/Logo/logoTextOnly";

export const HEADER_HEIGHT_MOBILE = 120;


export const HeaderMobile = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTop>
          <LogoTextOnly size={24}/>
        </HeaderTop>
        <HeaderBottom>
          <HeaderLink to="/connect">Work</HeaderLink>
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
  align-items: flex-end;
  justify-content: center;
  width: 100vw;
  padding: 0;
  height: ${headerTopHeightPx};
  background: ${COLOR_HEADER};
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
