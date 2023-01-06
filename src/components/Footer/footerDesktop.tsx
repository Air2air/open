import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "images/logo_white.svg";
import LogoTextWhite from "images/logo_text_white.svg";
import {
  COLOR_BASE_LIGHT,
  COLOR_RED,
  COLOR_RED_HOVER,
  CONTENT_WIDTH_DESKTOP,
  FONT_CAPTION_DESKTOP,
} from "styles/Constants";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FOOTER_CONTAINER_HEIGHT_DESKTOP, FOOTER_CONTENT_HEIGHT_DESKTOP, FOOTER_COPYRIGHT_HEIGHT_DESKTOP, FOOTER_HEIGHT_DESKTOP } from "./footerCSS";
import { assignBackgroundColor } from "utils/assignBackgroundColor";
import { IFooterProps } from "./footer";

export const FooterDesktop = (props:IFooterProps) => {


  return (
    <FooterWrapper
      style={{
        backgroundColor: assignBackgroundColor(props.backgroundColor),
      }}
    >
      <FooterContainer>
        <FooterContentRow>
          <FooterColumn>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              delay={0}
              offset={0}
            >
              <Link className="link" to="/home">
                <div style={{ width: "120px", opacity: 0.6 }}>
                  <LogoTextWhite />
                </div>
              </Link>
            </AnimationOnScroll>
          </FooterColumn>
          <FooterColumn>
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
          </FooterColumn>
        </FooterContentRow>

        <FooterCopyright>
          <div>&copy; Eleven of Ten LLP</div>
          <Link to="/home">
            <div style={{ width: "30px", opacity: 0.3 }}>
              <LogoWhite />
            </div>
          </Link>
          <div>All rights reserved.</div>
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

//Desktop


const FooterWrapper = styled.div`
  position: relative;
  z-index: +1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;

  height: ${FOOTER_HEIGHT_DESKTOP}px;
  /* margin: 50px 0 0 0; */
  /* background-color: blue; */
`;

const FooterContainer = styled.div`
  display: flex;
  z-index: +1;
  flex-direction: column;
  width: ${CONTENT_WIDTH_DESKTOP};
  margin: 0 auto;
  height: ${FOOTER_CONTAINER_HEIGHT_DESKTOP}px;
  /* background-color: lightblue; */
`;

const FooterContentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  height: ${FOOTER_CONTENT_HEIGHT_DESKTOP}px;
  /* background-color: gold; */
`;

const FooterColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: ${FOOTER_CONTENT_HEIGHT_DESKTOP}px;
  /* background: ${COLOR_RED}; */
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  height: ${FOOTER_CONTENT_HEIGHT_DESKTOP}px;
  /* background: green; */
`;

const FooterLink = styled(Link)`
  ${FONT_CAPTION_DESKTOP}
  padding: 8px 0;
  text-align: left;
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
  height: ${FOOTER_COPYRIGHT_HEIGHT_DESKTOP}px;

  div {
    color: ${COLOR_BASE_LIGHT};
  }
  /* background: ${COLOR_RED}; */
`;
