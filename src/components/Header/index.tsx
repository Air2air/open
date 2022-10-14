import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoBlack } from "./../../images/logo_black.svg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoBlack width="50" />
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
