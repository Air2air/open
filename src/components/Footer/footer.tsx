import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_white.svg";
import {

  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_6,
  COLOR_BASE_LIGHT,

  FOOTER_HEIGHT_PX,
} from "../../styles/Constants";

export const Footer = () => {
  return (
    <FooterWrapperOuter>
      <FooterWrapperInner>
        <FooterLinkRow>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/approach">Approach</FooterLink>
          <FooterLink to="/markets">Markets</FooterLink>
          <FooterLink to="/timeline">Funding Stages</FooterLink>
          <FooterLink to="/vision">Vision</FooterLink>
          <FooterLink to="/about">About</FooterLink></FooterLinkRow>
        <FooterCopyright>
          <div>&copy; Eleven Group Inc.</div>
          <Link to="/home">
            <LogoWhite width="30" />
          </Link>
          <div>All rights reserved.</div>
        </FooterCopyright>
      </FooterWrapperInner>
    </FooterWrapperOuter>
  );
};

const FooterWrapperOuter = styled.div`
  z-index: +1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: ${FOOTER_HEIGHT_PX};
  background:${COLOR_BASE_2}
  /* background-color: blue; */
`;

const FooterWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  justify-content: space-around;
  height: ${FOOTER_HEIGHT_PX};
  margin: 0 auto;
  /* background-color: lightblue; */
`;

const FooterLinkRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background: red; */
`;

const FooterLink = styled(Link)`
  font-size: 1.2em;
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const FooterCopyright = styled.div`
  font-size: 0.9em;
  color: ${COLOR_BASE_6};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  div {
    color: ${COLOR_BASE_LIGHT};
  }
  /* background: red; */
`;
