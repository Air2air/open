import Container from "components/Container/container";
import styled from "styled-components";
import { COLOR_HEADER, CONTENT_WIDTH_DESKTOP } from "styles/Constants";
import { NavLinks } from "./navLinks";

const NAV_PANEL_HEIGHT = "15rem";

export const NavPanel = (height) => {
  // hide or show the NavPanelOuter based on the value of visible

  return (
    <>
      <NavPanelOuter style={{ height: height }}>
        <Container>
          <NavPanelInner style={{ height: NAV_PANEL_HEIGHT }}>
            <NavLinks />
          </NavPanelInner>
        </Container>
      </NavPanelOuter>
    </>
  );
};

const NavPanelOuter = styled.div`
  /* z-index: +1; */
  /* position: fixed; */
  display: flex;
  width: 100%;
  /* height: ${NAV_PANEL_HEIGHT}; */
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
