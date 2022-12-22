import { BREAKPOINT } from "constants/index";
import { useState, useEffect } from "react";
import { FooterDesktop } from "./footerDesktop";
import { FooterMobile } from "./footerMobile";

const footerVideo: number = 776445588;

export const Footer = () => {
  /*------ Responsive -------*/
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      {width > BREAKPOINT ? (
        <FooterDesktop footerVideo={footerVideo} />
      ) : (
        <FooterMobile footerVideo={footerVideo} />
      )}
    </>
  );
};
