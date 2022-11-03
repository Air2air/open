import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_white.svg";
import { ReactComponent as LogoTextWhite } from "./../../images/logo_text_white.svg";
import {
  BREAKPOINT_PX,
  COLOR_BASE,
  COLOR_BASE_4,
  COLOR_BASE_LIGHT,
  COLOR_TITLE_TEXT,
  COLOR_TITLE_TEXT_HOVER,
  CONTENT_WIDTH_DESKTOP,
  FOOTER_HEIGHT_DESKTOP,
  FOOTER_HEIGHT_MOBILE,
} from "../../styles/Constants";
import { AnimationOnScroll } from "react-animation-on-scroll";
import VideoCallout from "../VideoCallout/videoCallout";

const pageVideo = 766667947;

export const Footer = () => {
  return (
    <FooterWrapper>
      <VideoCallout
        pageVideo={pageVideo}
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
                <LogoTextWhite width="150" style={{ opacity: 0.6 }} />
              </Link>
            </AnimationOnScroll>
          </FooterColumn>
          <FooterColumn>
            <FooterLinkColumn>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/what_we_do">What We Do</FooterLink>
              <FooterLink to="/markets">Markets</FooterLink>
              <FooterLink to="/vision">Vision</FooterLink>
            </FooterLinkColumn>
            <FooterLinkColumn>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/timeline">Venture stages</FooterLink>
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

//Mobile
const FOOTER_HEIGHT_MOBILE_PX = FOOTER_HEIGHT_MOBILE * 0.8;
const FOOTER_CONTAINER_HEIGHT_MOBILE = FOOTER_HEIGHT_MOBILE * 0.8;
const FOOTER_CONTAINER_HEIGHT_MOBILE_PX = FOOTER_CONTAINER_HEIGHT_MOBILE + "px";
const FOOTER_CONTENT_HEIGHT_MOBILE_PX =
  FOOTER_CONTAINER_HEIGHT_MOBILE * 0.8 + "px";
const FOOTER_COPYRIGHT_HEIGHT_MOBILE_PX =
  FOOTER_CONTAINER_HEIGHT_MOBILE * 0.2 + "px";

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
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_HEIGHT_MOBILE_PX};
  }
  /* background-color: blue; */
`;

const FooterContainer = styled.div`
  display: flex;
  z-index: +1;
  flex-direction: column;
  width: ${CONTENT_WIDTH_DESKTOP};
  margin: 0 auto;

  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_CONTAINER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_CONTAINER_HEIGHT_MOBILE_PX};
  }
  /* background-color: lightblue; */
`;

const FooterContentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;

  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_CONTENT_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_CONTENT_HEIGHT_MOBILE_PX};
  }
  /* background-color: gold; */
`;

const FooterColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_CONTENT_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_CONTENT_HEIGHT_MOBILE_PX};
  }
  /* background: red; */
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  justify-content: center;

  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_CONTENT_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_CONTENT_HEIGHT_MOBILE_PX};
  }
  /* background: green; */
`;

const FooterLink = styled(Link)`
  font-size: 1.1em;
  font-weight: 400;
  padding: 8px 0;
  text-align: left;
  color: ${COLOR_TITLE_TEXT};
  transition: all 200ms;
  &:hover {
    color: ${COLOR_TITLE_TEXT_HOVER};
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
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_COPYRIGHT_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${FOOTER_COPYRIGHT_HEIGHT_MOBILE_PX};
  }
  div {
    color: ${COLOR_BASE_LIGHT};
  }
  /* background: red; */
`;
