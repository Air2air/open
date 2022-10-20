import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoBlue } from "./../../images/logo_blue.svg";
import { HEADER_HEIGHT } from "../../styles/Constants";
import AmChart5 from "../AmChart/AmChart5";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoBlue width="50" />
      </Link>
      <AmChart5 />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  height: ${HEADER_HEIGHT};
  margin: 0 auto;
  //background: red;
`;
