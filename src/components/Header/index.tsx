import { Link } from "react-router-dom";
import styled from "styled-components";
import AmChart from "../AmChart/AmChart";
import { ReactComponent as LogoBlue } from "./../../images/logo_blue.svg";
import { HEADER_HEIGHT } from "./../../styles/Constants";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoBlue width="50" />
      </Link>
      <AmChart/>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: '99vw';
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: ${HEADER_HEIGHT};
//background:red;
`;
