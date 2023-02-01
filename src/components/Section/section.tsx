import { FetchData } from "fetch/fetch";
import { useEffect, useState } from "react";
import { BREAKPOINT } from "styles/Constants";
import SectionDesktop from "./sectionDesktop";
import SectionMobile from "./sectionMobile";

const Section = ({ jsonFile }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return null;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.map((props, index) => (
        <div key={index}>
          {width > BREAKPOINT ? (
            <SectionDesktop key={index} index={index} {...props} />
          ) : (
            <SectionMobile key={index} index={index} {...props} />
          )}
        </div>
      ))}
    </>
  );
};

export default Section;
