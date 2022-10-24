import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_white.svg";
import { HEADER_HEIGHT } from "../../styles/Constants";

export const Header = () => {
  return (
    <HeaderWrapperOuter>
      <HeaderWrapperInner>
        <Link to="/home">
          <LogoWhite width="46" />
        </Link>
        <HeaderButtonWrapper>
        <HeaderLinkButton to="/team">Contact</HeaderLinkButton>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/team">Team</HeaderLink>
        </HeaderButtonWrapper>
      </HeaderWrapperInner>
    </HeaderWrapperOuter>
  );
};

const HEADER_HEIGHT_PX = HEADER_HEIGHT + 'px'
const HEADER_BUTTON_HEIGHT_PX = (HEADER_HEIGHT * .5) + 'px'

const HeaderWrapperOuter = styled.div`
  z-index: +1;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: ${HEADER_HEIGHT_PX};
  /* background-color:blue; */
`;

const HeaderWrapperInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  height: ${HEADER_HEIGHT_PX};
  margin: 0 auto;
  /* background-color:blue; */
`;

const HeaderButtonWrapper = styled.div`
  /* flex-grow: 1; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${HEADER_HEIGHT} + 'px';
  /* background: red; */
`;

const HeaderLink = styled(Link)`
  font-size: 1.2em;
  padding: 0 30px;
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT_PX};
`;


const HeaderLinkButton = styled(Link)`
  font-size: 1.2em;
  padding: 0 30px;
  display: flex;
  align-items: center;
  height: ${HEADER_BUTTON_HEIGHT_PX};
  background:red;
`;
