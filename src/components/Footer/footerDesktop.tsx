import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_white.svg";
import { ReactComponent as LogoTextWhite } from "./../../images/logo_text_white.svg";
import {
  COLOR_BASE,
  COLOR_BASE_4,
  COLOR_BASE_LIGHT,
  COLOR_RED,
  COLOR_RED_HOVER,
  CONTENT_WIDTH_DESKTOP,
  FOOTER_HEIGHT_DESKTOP,
} from "../../styles/Constants";
import { AnimationOnScroll } from "react-animation-on-scroll";
import VideoCallout from "../VideoCallout/videoCallout";
import { FC } from "react";

type FooterProps = {
  footerVideo: number;
};

export const FooterDesktop: FC<FooterProps> = ({footerVideo}) => {
  return (
    <FooterWrapper>
      <VideoCallout
        pageVideo={footerVideo}
        overlayOpacity={0.9}
        overlayColor={COLOR_BASE}
      />
      <FooterContainer>
        <FooterContentRow>
          <FooterColumn>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              delay={0}
              offset={0}
            >
              <Link className="link" to="/home">
                <LogoTextWhite width="120" style={{ opacity: 0.6 }} />
              </Link>
            </AnimationOnScroll>
          </FooterColumn>
          <FooterColumn>
            <FooterLinkColumn>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/what_we_do">What We Do</FooterLink>
              <FooterLink to="/markets">Markets</FooterLink>
            </FooterLinkColumn>
            <FooterLinkColumn>
              <FooterLink to="/vision">Vision</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              {/* <FooterLink to="/timeline">Venture stage</FooterLink> */}
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinkColumn>
          </FooterColumn>
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

//Desktop
const FOOTER_HEIGHT_DESKTOP_PX = FOOTER_HEIGHT_DESKTOP + "px";
const FOOTER_CONTAINER_HEIGHT_DESKTOP = FOOTER_HEIGHT_DESKTOP * 0.8;
const FOOTER_CONTAINER_HEIGHT_DESKTOP_PX =
  FOOTER_CONTAINER_HEIGHT_DESKTOP + "px";
const FOOTER_CONTENT_HEIGHT_DESKTOP_PX =
  FOOTER_CONTAINER_HEIGHT_DESKTOP * 0.8 + "px";
const FOOTER_COPYRIGHT_HEIGHT_DESKTOP_PX =
  FOOTER_CONTAINER_HEIGHT_DESKTOP * 0.2 + "px";

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
  height: ${FOOTER_HEIGHT_DESKTOP_PX};
  /* background-color: blue; */
`;

const FooterContainer = styled.div`
  display: flex;
  z-index: +1;
  flex-direction: column;
  width: ${CONTENT_WIDTH_DESKTOP};
  margin: 0 auto;
  height: ${FOOTER_CONTAINER_HEIGHT_DESKTOP_PX};
  /* background-color: lightblue; */
`;

const FooterContentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  height: ${FOOTER_CONTENT_HEIGHT_DESKTOP_PX};
  /* background-color: gold; */
`;

const FooterColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: ${FOOTER_CONTENT_HEIGHT_DESKTOP_PX};
  /* background: ${COLOR_RED}; */
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  height: ${FOOTER_CONTENT_HEIGHT_DESKTOP_PX};
  /* background: green; */
`;

const FooterLink = styled(Link)`
  font-size: 1.1em;
  font-weight: 400;
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
  height: ${FOOTER_COPYRIGHT_HEIGHT_DESKTOP_PX};

  div {
    color: ${COLOR_BASE_LIGHT};
  }
  /* background: ${COLOR_RED}; */
`;
