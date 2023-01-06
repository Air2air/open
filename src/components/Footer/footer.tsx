import { BREAKPOINT } from "styles/Constants";
import { useState, useEffect } from "react";
import { FooterDesktop } from "./footerDesktop";
import { FooterMobile } from "./footerMobile";

export interface IFooterProps {
  children?: React.ReactNode;
  backgroundColor: number;
}

export const Footer = (props: IFooterProps) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  console.log("backgroundColor: ", props.backgroundColor);

  return (
    <>
      {width > BREAKPOINT ? (
        <FooterDesktop backgroundColor={props.backgroundColor} />
      ) : (
        <FooterMobile backgroundColor={props.backgroundColor} />
      )}
    </>
  );
};
