import {
  FooterColumnRow,
  FooterContainer,
  FooterLogoRow,
  FooterWrapper,
  FOOTER_HEIGHT_MOBILE,
} from "./footerComponents";
import { LogoPen } from "components/Logo/logoPen";
import { COLOR_FOOTER } from "styles/Colors";
import { FooterCopyright } from "./footerCopyright";
import { FooterLinks } from "./footerLinks";

export const FooterMobile = () => {
  return (
    <FooterWrapper
    className="footer"
      style={{
        backgroundColor: COLOR_FOOTER,
        height: `${FOOTER_HEIGHT_MOBILE}px`,
      }}
    >
      <FooterContainer>
        <FooterLogoRow animateIn="animate__fadeInUp" delay={0} offset={0}>
          <LogoPen size={24} />
        </FooterLogoRow>
        <FooterColumnRow>
          <FooterLinks />
        </FooterColumnRow>
        <FooterCopyright />
      </FooterContainer>
    </FooterWrapper>
  );
};
