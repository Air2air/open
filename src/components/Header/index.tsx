import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "./../../images/logo_white.svg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWhite width="60" />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
`;
