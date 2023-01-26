import { IFooterProps } from "./footer";
import Container from "components/Container/container";
import { Spacer } from "components/Spacer/spacer";
import {
  FooterContentRow,
  FooterLinkColumn,
  FooterLink,
  FooterCopyright,
  FooterLogoRow,
  FooterLogoWrapper,
} from "./footerComponents";
import { LogoTextOnly } from "components/Logo/logoTextOnly";

const backgroundImageBug = "url(/images/site/logo_bug.svg)";

export const FooterMobile = (props: IFooterProps) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <Spacer height={30} backgroundColor={props.backgroundColor} />
      <FooterLogoRow animateIn="animate__fadeInUp" delay={0} offset={0}>
        <LogoTextOnly />
      </FooterLogoRow>

      <FooterContentRow>
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
      </FooterContentRow>

      <FooterCopyright>
        <div>&copy; Open</div>
        <FooterLogoWrapper
          style={{
            background: backgroundImageBug,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></FooterLogoWrapper>
        <div>All rights reserved.</div>
      </FooterCopyright>
      <Spacer height={20} backgroundColor={props.backgroundColor} />
    </Container>
  );
};

//Mobile
