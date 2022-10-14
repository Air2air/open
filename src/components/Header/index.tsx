import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoBlue } from "./../../images/logo_blue.svg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoBlue width="50" />
      </Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  padding:0 50px;
  align-items: flex-end;
  justify-content: flex-start;
`;
