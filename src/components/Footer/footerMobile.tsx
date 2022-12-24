import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_white.svg";
import { ReactComponent as LogoTextWhite } from "./../../images/logo_text_white.svg";
import {
  COLOR_BASE_4,
  COLOR_BASE_LIGHT,
  COLOR_RED,
  COLOR_RED_HOVER,
  CONTENT_WIDTH_MOBILE,
  FOOTER_HEIGHT_MOBILE,
} from "constants/index";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const FooterMobile = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogoRow animateIn="animate__fadeInUp" delay={0} offset={0}>
          <Link className="link" to="/home">
            <LogoTextWhite width="150" />
          </Link>
        </FooterLogoRow>

        <FooterContentRow>
          <FooterLinkColumn>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/practice_areas">What We Do</FooterLink>
            <FooterLink to="/markets">Markets</FooterLink>
            <FooterLink to="/casestudies">Case Studies</FooterLink>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <FooterLink to="/vision">Vision</FooterLink>
            <FooterLink to="/history">History</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinkColumn>
        </FooterContentRow>

        <FooterCopyright>
          <div>&copy; Eleven of Ten LLP</div>
          <Link to="/home">
            <LogoWhite width="30" style={{ opacity: 0.3 }} />
          </Link>
          <div>All rights reserved.</div>
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

//Mobile
const FOOTER_CONTAINER_HEIGHT_MOBILE = FOOTER_HEIGHT_MOBILE * 0.8;
const FOOTER_LOGO_HEIGHT_MOBILE = FOOTER_CONTAINER_HEIGHT_MOBILE * 0.2;
const FOOTER_CONTENT_HEIGHT_MOBILE = FOOTER_CONTAINER_HEIGHT_MOBILE * 0.5;
const FOOTER_COPYRIGHT_HEIGHT_MOBILE = FOOTER_CONTAINER_HEIGHT_MOBILE * 0.3;

const FooterWrapper = styled.div`
  position: relative;
  z-index: +1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  background: ${COLOR_BASE_4};
  height: ${FOOTER_HEIGHT_MOBILE}px;
  /* background-color: blue; */
`;

const FooterContainer = styled.div`
  display: flex;
  z-index: +1;
  flex-direction: column;
  text-align: center;
  width: ${CONTENT_WIDTH_MOBILE};
  margin: 0 auto;
  height: ${FOOTER_CONTAINER_HEIGHT_MOBILE}px;
  /* background-color: lightblue; */
`;

const FooterLogoRow = styled(AnimationOnScroll)`
  display: flex;
  /* z-index: +1; */
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: ${FOOTER_LOGO_HEIGHT_MOBILE}px;
  /* background-color: green; */
  a.link {
    opacity: 0.4;
  }
  &:hover {
    a.link {
      opacity: 1;
    }
  }
`;

const FooterContentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${FOOTER_CONTENT_HEIGHT_MOBILE}px;
  /* background-color: gold; */
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: ${FOOTER_CONTENT_HEIGHT_MOBILE}px;
  /* background: green; */
`;

const FooterLink = styled(Link)`
  font-size: 1.1em;
  font-weight: 400;
  padding: 8px 0;
  text-align: center;
  color: ${COLOR_RED};
  transition: all 200ms;
  &:hover {
    color: ${COLOR_RED_HOVER};
  }
`;

const FooterCopyright = styled.div`
  z-index: +1;
  font-size: 0.9em;
  color: ${COLOR_BASE_LIGHT};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  height: ${FOOTER_COPYRIGHT_HEIGHT_MOBILE}px;
  div {
    color: ${COLOR_BASE_LIGHT};
  }
  /* background: ${COLOR_RED}; */
`;
