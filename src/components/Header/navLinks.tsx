import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR_LINK_REVERSE, COLOR_LINK_REVERSE_HOVER } from "styles/Colors";
import { BREAKPOINT } from "styles/Constants";
import { FONT_CAPTION_DESKTOP, FONT_CAPTION_MOBILE } from "styles/Text";

import { dataRoutes } from "routes/routes";

// map over dataroutes and create a link for each one

const sliceOne = dataRoutes.slice(0, 3);
const sliceTwo = dataRoutes.slice(3, 6);
const sliceThree = dataRoutes.slice(6, 9);

export const NavLinks = () => {
  return (
    <>
      <NavLinkColumn>
        {sliceOne.map((route, index) => (
          <NavLink key={index} to={route.path}>
            {route.section}
          </NavLink>
        ))}
      </NavLinkColumn>
      <NavLinkColumn>
        {sliceTwo.map((route, index) => (
          <NavLink key={index} to={route.path}>
            {route.section}
          </NavLink>
        ))}
      </NavLinkColumn>
      <NavLinkColumn>
        {sliceThree.map((route, index) => (
          <NavLink key={index} to={route.path}>
            {route.section}
          </NavLink>
        ))}
      </NavLinkColumn>
    </>
  );
};

const NAV_COLUMN_HEIGHT_DESKTOP = 100;
const NAV_COLUMN_HEIGHT_MOBILE = 50

export const NavLinkColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  padding: 0 0 40px 0;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${NAV_COLUMN_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${NAV_COLUMN_HEIGHT_MOBILE}px;
  }
  /* background: gold; */
`;

export const NavLink = styled(Link)`
  color: ${COLOR_LINK_REVERSE};
  transition: all 200ms;
  &:hover {
    color: ${COLOR_LINK_REVERSE_HOVER};
  }
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_CAPTION_DESKTOP}
    padding: 8px 0;
    text-align: left;
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_CAPTION_MOBILE}
    padding: 6px 0;
    text-align: center;
  }
`;
