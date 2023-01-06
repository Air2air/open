import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "images/logo_white.svg";
import LogoTextWhite from "images/logo_text_white.svg";
import {
  COLOR_BASE_LIGHT,
  COLOR_RED,
  COLOR_RED_HOVER,
  FONT_CAPTION_MOBILE,
} from "styles/Constants";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  FOOTER_CONTENT_HEIGHT_MOBILE,
  FOOTER_COPYRIGHT_HEIGHT_MOBILE,
  FOOTER_LOGO_HEIGHT_MOBILE,
} from "./footerCSS";

import { IFooterProps } from "./footer";
import Container from "components/Container/container";
import { Spacer } from "components/Spacer/spacer";

export const FooterMobile = (props: IFooterProps) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <Spacer height={30} backgroundColor={props.backgroundColor} />
      <FooterLogoRow animateIn="animate__fadeInUp" delay={0} offset={0}>
        <Link className="link" to="/home">
          <div style={{ width: "130px", opacity: 0.6 }}>
            <LogoTextWhite />
          </div>
        </Link>
      </FooterLogoRow>

      <FooterContentRow>
        <FooterLinkColumn>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/practice_areas">What We Do</FooterLink>
          <FooterLink to="/markets">Markets</FooterLink>
          <FooterLink to="/casestudies">Case Studies</FooterLink>
          <FooterLink to="/vision">Vision</FooterLink>
        </FooterLinkColumn>
        <FooterLinkColumn>
          <FooterLink to="/history">History</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/articles">Articles</FooterLink>
        </FooterLinkColumn>
      </FooterContentRow>

      <FooterCopyright>
        <div>&copy; Eleven of Ten LLP</div>

        <div style={{ width: "24px", opacity: 0.3 }}>
          <LogoWhite />
        </div>

        <div>All rights reserved.</div>
      </FooterCopyright>
      <Spacer height={20} backgroundColor={props.backgroundColor} />
    </Container>
  );
};

//Mobile

const FooterLogoRow = styled(AnimationOnScroll)`
  display: flex;
  /* z-index: +1; */
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: ${FOOTER_LOGO_HEIGHT_MOBILE}px;
  a.link {
    opacity: 0.4;
  }
  &:hover {
    a.link {
      opacity: 1;
    }
  }
  /* background-color: green; */
`;

const FooterContentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* min-height: ${FOOTER_CONTENT_HEIGHT_MOBILE}px; */
  /* background-color: gold; */
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  /* min-height: ${FOOTER_CONTENT_HEIGHT_MOBILE}px; */
  /* background: green; */
`;

const FooterLink = styled(Link)`
  ${FONT_CAPTION_MOBILE}
  padding: 6px 0;
  text-align: center;
  color: ${COLOR_RED};
  transition: all 200ms;
  &:hover {
    color: ${COLOR_RED_HOVER};
  }
`;

const FooterCopyright = styled.div`
  z-index: +1;
  font-size: 0.8em;
  color: ${COLOR_BASE_LIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: ${FOOTER_COPYRIGHT_HEIGHT_MOBILE}px;
  div {
    color: ${COLOR_BASE_LIGHT};
  }
  /* background: "red"; */
`;
