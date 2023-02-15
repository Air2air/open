import { LogoPen } from "components/Logo/logoPen";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { COLOR_FOOTER } from "styles/Colors";
import { FOOTER_HEIGHT_DESKTOP } from "styles/Constants";

import {
  FooterWrapper,
  FooterContainer,
  FooterColumnRow,
  FooterColumn,
} from "./footerComponents";
import { FooterCopyright } from "./footerCopyright";
import { FooterLinks } from "./footerLinks";

export const FooterDesktop = () => {
  return (
    <FooterWrapper
      className="footer"
      style={{
        backgroundColor: COLOR_FOOTER,
        height: `${FOOTER_HEIGHT_DESKTOP}px`,
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
              <LogoPen size={30} />
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
