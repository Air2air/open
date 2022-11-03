import { BREAKPOINT } from "../../styles/Constants";
import { useState, useEffect } from "react";
import { FooterDesktop } from "./footerDesktop";
import { FooterMobile } from "./footerMobile";

export const Footer = () => {
  
  /*------ Responsive -------*/
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return <>{width > BREAKPOINT ? <FooterDesktop /> : <FooterMobile />}</>;
};
