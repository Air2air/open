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

// map over dataroutes and create a link for each one

const sliceOne = dataRoutes.slice(0, 1);
const sliceTwo = dataRoutes.slice(1, 2);
const sliceThree = dataRoutes.slice(2, 3);
const sliceFour = dataRoutes.slice(3, 4);
// const sliceFive = dataRoutes.slice(4, 5);


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
      <NavLinkColumn>
        {sliceFour.map((route, index) => (
          <NavLink key={index} to={route.path}>
            {route.section}
          </NavLink>
        ))}
      </NavLinkColumn>
      {/* <NavLinkColumn>
        {sliceFive.map((route, index) => (
          <NavLink key={index} to={route.path}>
            {route.section}
          </NavLink>
        ))}
      </NavLinkColumn> */}
    </>
  );
};

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
