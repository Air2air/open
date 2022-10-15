import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as LogoBlue } from "./../../images/logo_blue.svg";
import { HEADER_HEIGHT } from "../../styles/Constants";
import AmChart4 from "../AmChart/AmChart4";



export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoBlue width="50" />
      </Link>
      <AmChart4 />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 99vw;
  height: ${HEADER_HEIGHT};
//background:red;
`;
