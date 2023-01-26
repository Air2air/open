import { LogoTextOnly } from "components/Logo/logoTextOnly";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { COLOR_FOOTER } from "styles/Colors";

import {
  FooterWrapper,
  FooterContainer,
  FooterColumnRow,
  FooterColumn,
  FOOTER_HEIGHT_DESKTOP,
} from "./footerComponents";
import { FooterCopyright } from "./footerCopyright";
import { FooterLinks } from "./footerLinks";

export const FooterDesktop = () => {
  return (
    <FooterWrapper
      style={{
        backgroundColor: COLOR_FOOTER,
        height: `${FOOTER_HEIGHT_DESKTOP}px`
      }}
    >
      <FooterContainer>
        <FooterColumnRow>
          <FooterColumn style={{ width: "40%" }}>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              delay={0}
              offset={0}
            >
              <LogoTextOnly size={30} />
            </AnimationOnScroll>
          </FooterColumn>
          <FooterColumn style={{ width: "60%" }}>
            <FooterLinks />
          </FooterColumn>
        </FooterColumnRow>
        <FooterCopyright />
      </FooterContainer>
    </FooterWrapper>
  );
};

//Desktop
