import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_white.svg";
import { ReactComponent as LogoTextWhite } from "./../../images/logo_text_white.svg";
import {
  COLOR_BASE_4,
  COLOR_BASE_6,
  COLOR_BASE_LIGHT,
  COLOR_TITLE_TEXT,
  COLOR_TITLE_TEXT_HOVER,
  FOOTER_HEIGHT,
  FOOTER_HEIGHT_PX,
} from "../../styles/Constants";

export const Footer = () => {
  return (
    <FooterWrapperOuter>
      <FooterWrapperInner>
        <FooterColumn>
          <Link className="link" to="/home">
            <LogoTextWhite width="150" />
          </Link>
        </FooterColumn>
        <FooterColumn>
          <FooterLinkColumn>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/approach">Approach</FooterLink>
            <FooterLink to="/markets">Markets</FooterLink>
            <FooterLink to="/vision">Vision</FooterLink>
            <FooterLink to="/about">About</FooterLink>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <FooterLink to="/timeline">Funding Stages</FooterLink>
            <FooterLink to="/biotech">BioTech</FooterLink>
            <FooterLink to="/healthtech">HealthTech</FooterLink>
            <FooterLink to="/medtech">MedTech</FooterLink>
            <FooterLink to="/pharmatech">PharmaTech</FooterLink>
          </FooterLinkColumn>
        </FooterColumn>
      </FooterWrapperInner>
      <FooterCopyright>
        <div>&copy; Eleven Group Inc.</div>
        <Link to="/home">
          <LogoWhite width="30" />
        </Link>
        <div>All rights reserved.</div>
      </FooterCopyright>
    </FooterWrapperOuter>
  );
};

const FOOTER_INNER_HEIGHT_PX = FOOTER_HEIGHT * 0.8 + "px";

const FooterWrapperOuter = styled.div`
  z-index: +1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  width: 100vw;
  height: ${FOOTER_HEIGHT_PX};
  background: ${COLOR_BASE_4};
  /* background-color: blue; */
`;

const FooterWrapperInner = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  height: ${FOOTER_INNER_HEIGHT_PX};
  margin: 0 auto;
  /* background-color: lightblue; */
`;

const FooterColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background: red; */
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  /* background: gold; */
`;

const FooterLink = styled(Link)`
  font-size: 1.1em;
  font-weight:400;
  padding: 8px 0;
  text-align: left;
  color:${COLOR_TITLE_TEXT};
  transition:all 200ms;
  &:hover {
    color:${COLOR_TITLE_TEXT_HOVER}
  }
`;

const FooterCopyright = styled.div`
  font-size: 0.9em;
  width: 80vw;
  color: ${COLOR_BASE_6};
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 40px;
  margin: 0 auto;
  div {
    color: ${COLOR_BASE_LIGHT};
  }
  /* background: red; */
`;
