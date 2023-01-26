import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR_LINK_REVERSE, COLOR_LINK_REVERSE_HOVER } from "styles/Colors";
import { BREAKPOINT } from "styles/Constants";
import { FONT_CAPTION_DESKTOP, FONT_CAPTION_MOBILE } from "styles/Text";
import {
  FOOTER_COLUMN_HEIGHT_DESKTOP,
  FOOTER_COLUMN_HEIGHT_MOBILE,
} from "./footerComponents";

export const FooterLinks = () => {
  return (
    <>
      <FooterLinkColumn>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/connect">Connect</FooterLink>
        <FooterLink to="/research">Research</FooterLink>
      </FooterLinkColumn>
      <FooterLinkColumn>
        <FooterLink to="/policy">Policy</FooterLink>
        <FooterLink to="/education">Education</FooterLink>
        <FooterLink to="/charter">Charter</FooterLink>
      </FooterLinkColumn>
      <FooterLinkColumn>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
        {/* <FooterLink to="/articles">Articles</FooterLink> */}
      </FooterLinkColumn>
    </>
  );
};

export const FooterLinkColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${FOOTER_COLUMN_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${FOOTER_COLUMN_HEIGHT_MOBILE}px;
  }
  /* background: gold; */
`;

export const FooterLink = styled(Link)`
  color: ${COLOR_LINK_REVERSE};
  transition: all 200ms;
  &:hover {
    color: ${COLOR_LINK_REVERSE_HOVER};
  }
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_CAPTION_DESKTOP}
    padding: 8px 0;
    text-align: left;
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_CAPTION_MOBILE}
    padding: 6px 0;
    text-align: center;
  }
`;
