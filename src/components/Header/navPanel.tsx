import Container from "components/Container/container";
import styled from "styled-components";
import { COLOR_HEADER, CONTENT_WIDTH_DESKTOP } from "styles/Constants";
import { NavLinks } from "./navLinks";



const NAV_PANEL_HEIGHT = 270;

export const NavPanel = (props) => {
  return (
    <>
      <NavPanelOuter>
        <Container>
          <NavPanelInner style={{ height: props.show ? NAV_PANEL_HEIGHT : "0" }}>
            <NavLinks />
          </NavPanelInner>
        </Container>
      </NavPanelOuter>
    </>
  );
};

const NavPanelOuter = styled.div`
  z-index: +1;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  overflow: hidden;
  background: ${COLOR_HEADER};
`;

const NavPanelInner = styled.div`
  transition: height 300ms;
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin: 0 auto;
  width: ${CONTENT_WIDTH_DESKTOP}px;
  /* margin: 0 0 40px 0; */
  /* background: blue; */
`;
