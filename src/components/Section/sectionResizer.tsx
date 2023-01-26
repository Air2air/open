
import { FetchData } from "fetch/fetch";
import { useEffect, useState } from "react";
import { Background, Parallax } from "react-parallax";
import styled from "styled-components";


// import { SectionSubhead } from "./sectionSubHead";
import { SectionTitle } from "./sectionTitle";

const SectionList = ({ jsonFile }) => {
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

  const calculatedHeight = (props) => {
    const heightCalc = props.height * width / 1000;
    if (props.height) {
      console.log(heightCalc);
      return heightCalc;
    }

  };

  return (
    <>
      {data.map((props, index) => (
        <div key={index} style={{ position: "relative" }}>
          <Parallax
            key={index}
            strength={props.strength}
            style={{ background: "red" }}
            renderLayer={(percentage) => (
              <>
                {props.title &&
                  props.title.map((props, index) => (
                    <SectionTitle
                      key={index}
                      {...props}
                      percentage={percentage}
                    />
                  ))}
              </>
            )}
          >
           
            {props.imageBackground && props.imageBackground !== "" && (
              <>
                <Background>
                  <BackgroundImage
                    height= {calculatedHeight(props)}
                    src={props.imageBackground}
                    alt="fill murray"
                  />
                </Background>
                <FillerDiv style={{ height: props.height }} />
              </>
            )}
          </Parallax>
        </div>
      ))}
    </>
  );
};

const FillerDiv = styled.div`
  width: ${window.innerWidth}px;
`;
const BackgroundImage = styled.img`
  min-width: ${window.innerWidth}px;
  height: ${(props) => props.height}px;
  object-fit: cover;
`;

export default SectionList;
