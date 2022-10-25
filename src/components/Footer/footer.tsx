import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_white.svg";
import { FOOTER_HEIGHT_PX } from "../../styles/Constants";
import Button from "../Button/button";

export const Footer = () => {
  return (
    <FooterWrapperOuter>
      <FooterWrapperInner>
        <Link to="/home">
          <LogoWhite width="46" />
        </Link>
        <FooterButtonWrapper>
          <Button to="/contact" text="Contact" />
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/approach">Approach</FooterLink>
          <FooterLink to="/team">Team</FooterLink>
        </FooterButtonWrapper>
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
  /* background-color:blue; */
`;

const FooterWrapperInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  height: ${FOOTER_HEIGHT_PX};
  margin: 0 auto;
  /* background-color:blue; */
`;

const FooterButtonWrapper = styled.div`
  /* flex-grow: 1; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${FOOTER_HEIGHT_PX};
  /* background: red; */
`;

const FooterLink = styled(Link)`
  font-size: 1.2em;
  padding: 0 30px;
  display: flex;
  align-items: center;
  height: ${FOOTER_HEIGHT_PX};
`;

