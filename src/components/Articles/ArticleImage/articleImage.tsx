import { useState, useEffect } from "react";
import { BREAKPOINT } from "styles/Constants";
import { IArticleProps } from "../articleInterfaces";
import ArticleImageDesktop from "./articleImageDesktop";
import { ArticleImageMobile } from "./articleImageMobile";

export const ArticleImage = (
  props: JSX.IntrinsicAttributes & {
    code?: string | undefined;
    image?: string | undefined;
  }
) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      {width > BREAKPOINT ? (
        <ArticleImageDesktop {...props} />
      ) : (
        <ArticleImageMobile {...props} />
      )}
    </>
  );
};

export default ArticleImage;
