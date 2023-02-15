import { BREAKPOINT } from "styles/Constants";
import { useState, useEffect } from "react";
import { FooterDesktop } from "./footerDesktop";
import { FooterMobile } from "./footerMobile";

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

// return ""

  return <>{width > BREAKPOINT ? <FooterDesktop /> : <FooterMobile />}</>;
};


export default Footer;