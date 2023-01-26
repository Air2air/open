
import { LogoTextOnly } from "components/Logo/logoTextOnly";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { COLOR_FOOTER } from "styles/Colors";

import {
  FooterWrapper,
  FooterContainer,
  FooterContentRow,
  FooterColumn,
  FooterLinkColumn,
  FooterLink,
  FooterCopyright,
  FooterLogoWrapper,
} from "./footerComponents";

const logo_bug = "url(/images/site/logo_bug.svg)";

export const FooterDesktop = () => {
  return (
    <FooterWrapper
      style={{
        backgroundColor: COLOR_FOOTER
      }}
    >
      <FooterContainer>
        <FooterContentRow>
          <FooterColumn style={{ width: "40%" }}>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              delay={0}
              offset={0}
            >
               <LogoTextOnly /> 
            </AnimationOnScroll>
          </FooterColumn>
          <FooterColumn style={{ width: "60%" }}>
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
          </FooterColumn>
        </FooterContentRow>

        <FooterCopyright>
          <div>&copy; Open</div>
          <FooterLogoWrapper
            style={{
              background: logo_bug,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></FooterLogoWrapper>
          <div>All rights reserved.</div>
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

//Desktop
