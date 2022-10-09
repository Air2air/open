import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_white.svg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoWhite width="50" />
      </Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
