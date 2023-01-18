import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  COLOR_HEADER,
  COLOR_HEADER_HOVER,
  COLOR_LINK_REVERSE,
  COLOR_LINK_REVERSE_HOVER,
  COLOR_WHITE,
  CONTENT_WIDTH_DESKTOP,
  FONT_CAPTION_DESKTOP,
} from "styles/Constants";

export const HEADER_HEIGHT_DESKTOP = 90;

export const HeaderDesktop = () => {
  return (
    <HeaderOuter>
      <HeaderInner>
        <HeaderLeft>
          <LinkName to="/home">Open Power Energy Network</LinkName>
        </HeaderLeft>
        <HeaderRight>
          <HeaderLink to="/getinvolved">Get Involved</HeaderLink>
          <HeaderLink to="/research">Research</HeaderLink>
          <HeaderLink to="/policy">Policy</HeaderLink>
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
  top: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  background:${COLOR_HEADER};
  /* background-color: green; */
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: ${CONTENT_WIDTH_DESKTOP};
  height: ${HEADER_HEIGHT_DESKTOP}px;
  margin: 0 auto;
  padding: 0;
  /* background-color: blue; */
`;

const HeaderLeft = styled.div`

  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  padding: 0;
  /* background: brown; */
`;

const LinkName = styled(Link)`
  ${FONT_CAPTION_DESKTOP};
  color: ${COLOR_WHITE};
  font-size:1.4em;
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

const HeaderRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  padding: 0;
  /* background: #000; */
`;

const HeaderLink = styled(Link)`
  ${FONT_CAPTION_DESKTOP};
  color: ${COLOR_LINK_REVERSE};
  /* padding: 0 20px; */
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: ${HEADER_HEIGHT_DESKTOP}px;
  background: ${COLOR_HEADER};
  transition: all 300ms;
  &:hover {
    color: ${COLOR_LINK_REVERSE_HOVER};
    background: ${COLOR_HEADER_HOVER};
  }
`;
