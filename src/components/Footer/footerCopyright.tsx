import { LogoBug } from "components/Logo/logoBug";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { COLOR_WHITE } from "styles/Colors";
import { BREAKPOINT } from "styles/Constants";
import {
  FOOTER_COPYRIGHT_HEIGHT_DESKTOP,
  FOOTER_COPYRIGHT_HEIGHT_MOBILE,
} from "./footerComponents";

export const FooterCopyright = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <FooterCopyrightWrapper>
      <div>&copy; Open Power & Energy Network</div>
      {width > BREAKPOINT ? <LogoBug size={20} />  : null}
      <div style={{ textAlign: "right"}}>All rights reserved.</div>
    </FooterCopyrightWrapper>
  );
};

export const FooterCopyrightWrapper = styled.div`
  z-index: +1;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: flex-start;
  width: 100%;
  div {
    color: ${COLOR_WHITE};
    opacity: 0.5;
  }
  @media (min-width: ${BREAKPOINT}px) {
    height: ${FOOTER_COPYRIGHT_HEIGHT_DESKTOP}px;
    font-size: 0.9em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${FOOTER_COPYRIGHT_HEIGHT_MOBILE}px;
    font-size: 0.8em;
  }
  /* background: blue; */
`;
