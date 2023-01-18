import { Link } from "react-router-dom";
import LogoWhite from "images/logo_white.svg";
import LogoTextWhite from "images/logo_text_white.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { assignBackgroundColor } from "utils/assignBackgroundColor";
import { IFooterProps } from "./footer";
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

export const FooterDesktop = (props: IFooterProps) => {
  return (
    <FooterWrapper
      style={{
        backgroundColor: assignBackgroundColor(props.backgroundColor),
      }}
    >
      <FooterContainer>
        <FooterContentRow>
          <FooterColumn style={{width:'40%'}}>
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
          <FooterColumn style={{width:'60%'}}>
            <FooterLinkColumn>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/getinvolved">Get Involved</FooterLink>
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
          <div>&copy; Open of Ten LLP</div>
          <FooterLogoWrapper>
            <LogoWhite />
          </FooterLogoWrapper>
          <div>All rights reserved.</div>
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

//Desktop
