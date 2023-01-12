import { Link } from "react-router-dom";

import LogoWhite from "images/logo_white.svg";
import LogoTextWhite from "images/logo_text_white.svg";

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
          <FooterLink to="/whatwedo">What We Do</FooterLink>
          <FooterLink to="/markets">Markets</FooterLink>
        </FooterLinkColumn>
        <FooterLinkColumn>
          <FooterLink to="/casestudies">Case Studies</FooterLink>
          <FooterLink to="/vision">Vision</FooterLink>
          <FooterLink to="/history">History</FooterLink>
        </FooterLinkColumn>
        <FooterLinkColumn>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/articles">Articles</FooterLink>
        </FooterLinkColumn>
      </FooterContentRow>

      <FooterCopyright>
        <div>&copy; Eleven of Ten LLP</div>

        <FooterLogoWrapper>
          <LogoWhite />
        </FooterLogoWrapper>

        <div>All rights reserved.</div>
      </FooterCopyright>
      <Spacer height={20} backgroundColor={props.backgroundColor} />
    </Container>
  );
};

//Mobile
