import { BREAKPOINT } from "styles/Constants";
import { useState, useEffect } from "react";
import { HeaderDesktop } from "./headerDesktop";
import { HeaderMobile } from "./headerMobile";

export const Header = () => {
  
  /*------ Responsive -------*/
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return <>{width > BREAKPOINT ? <HeaderDesktop /> : <HeaderMobile />}</>;
};
