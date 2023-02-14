
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

  return width > BREAKPOINT ? (
    <FooterCopyrightDesktop>
      <div>&copy; Open Power & Energy Network</div>
      <div style={{ textAlign: "right" }}>All rights reserved.</div>
    </FooterCopyrightDesktop>
  ) : (
    <FooterCopyrightMobile>
      <div>&copy; Open Power & Energy Network</div>
      <div style={{ textAlign: "center" }}>All rights reserved.</div>
    </FooterCopyrightMobile>
  );
};

const FooterCopyrightDesktop = styled.div`
  z-index: +1;
  display: grid;
  grid-template-columns: auto auto;
  align-items: flex-start;
  width: 100%;
  height: ${FOOTER_COPYRIGHT_HEIGHT_DESKTOP}px;
  font-size: 0.9em;
  div {
    color: ${COLOR_WHITE};
    opacity: 0.5;
  }
  /* background: blue; */
`;

const FooterCopyrightMobile = styled.div`
  z-index: +1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${FOOTER_COPYRIGHT_HEIGHT_MOBILE}px;
  font-size: 0.7em;
  div {
    color: ${COLOR_WHITE};
    opacity: 0.5;
  }
  /* background: blue; */
`;
