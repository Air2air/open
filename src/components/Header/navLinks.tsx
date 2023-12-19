import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  COLOR_HEADER,
  COLOR_LINK_REVERSE,
  COLOR_LINK_REVERSE_HOVER,
} from "styles/Colors";
import { BREAKPOINT } from "styles/Constants";
import { FONT_NAVLINK_DESKTOP, FONT_NAVLINK_MOBILE } from "styles/Text";
import { dataRoutes } from "routes/routes";

export const NavLinks = () => {
  return (
    <NavLinkContainer>
      {dataRoutes.map((route, index) => (
        <NavLinkColumn key={index}>
          <NavLink to={route.path}>
            {route.section}
          </NavLink>
        </NavLinkColumn>
      ))}
    </NavLinkContainer>
  );
};

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const NavLinkColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* background: gold; */
`;

export const NavLink = styled(Link)`
  height: 1.5rem;
  width: 100%;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${COLOR_LINK_REVERSE};
  transition: all 200ms;
  &:hover {
    color: ${COLOR_LINK_REVERSE_HOVER};
    background: ${COLOR_HEADER};
  }
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_NAVLINK_DESKTOP}
    padding: 8px 0;
    text-align: left;
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_NAVLINK_MOBILE}
    padding: 6px 0;
    text-align: center;
  }
`;
