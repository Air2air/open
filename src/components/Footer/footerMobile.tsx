import {
  FooterColumnRow,
  FooterContainer,
  FooterWrapper,
  FOOTER_HEIGHT_MOBILE,
  FOOTER_LOGO_HEIGHT_MOBILE,
} from "./footerComponents";
import { LogoPen } from "components/Logo/logoPen";
import { COLOR_FOOTER } from "styles/Colors";
import { FooterCopyright } from "./footerCopyright";
import { FooterLinks } from "./footerLinks";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";

export const FooterMobile = () => {
  return (
    <FooterWrapper
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

export const FooterLogoRow = styled(AnimationOnScroll)`
  display: flex;
  /* z-index: +1; */
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  height: ${FOOTER_LOGO_HEIGHT_MOBILE}px;
  a.link {
    opacity: 0.4;
  }
  &:hover {
    a.link {
      opacity: 1;
    }
  }
  /* background: gold; */
`;
