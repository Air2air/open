
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
  LogoText,
} from "./footerComponents";

const backgroundImageText = "url(/images/site/logo_text.svg)";
const backgroundImageBug = "url(/images/site/logo_bug.svg)";

export const FooterDesktop = (props: IFooterProps) => {
  return (
    <FooterWrapper
      style={{
        backgroundColor: assignBackgroundColor(props.backgroundColor),
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
              <LogoText
                to="/home"
                style={{
                  backgroundImage: backgroundImageText,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              />
            </AnimationOnScroll>
          </FooterColumn>
          <FooterColumn style={{ width: "60%" }}>
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
          <FooterLogoWrapper
            style={{
              background: backgroundImageBug,
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
