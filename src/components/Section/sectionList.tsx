import Container from "components/Container/container";
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

  const BREAKPOINT_WIDESCREEN = 1100;
  const IMAGE_MAX_HEIGHT = 1100;

  const calculatedContainerHeight = (props) => {
    const heightCalc = width * 0.7;
    if (props.height) {
      if (width > BREAKPOINT_WIDESCREEN) {
        // if screen width is over 1100px
        return props.height + "px"; // do not exceed hardcoded height value
      } else {
        return heightCalc + "px"; // else, calculate height based on screen width
      }
    }
  };

  const calculatedImageHeight = (props) => {
    const heightCalc = width * 0.7;
    if (props.height) {
      if (width > BREAKPOINT_WIDESCREEN) {
        return IMAGE_MAX_HEIGHT;
      } else {
        return heightCalc;
      }
    }
  };

  // if window width is over X, limit the height to Y

  return (
    <>
      {data.map((props, index) => (
        <Parallax
          key={index}
          bgImage={props.imageBackground}
          bgImageStyle={{ backgroundSize: "contain" }}
          strength={props.strength}
          style={{
            overflow: "hidden",
          }}
          renderLayer={(percentage) => (
            <Container>
              {props.title &&
                props.title.map((props, index) => (
                  <SectionTitle
                    key={index}
                    {...props}
                    percentage={percentage}
                  />
                ))}
            </Container>
          )}
        >
          <div
            style={{
              height: props.height,
            }}
          />
        </Parallax>
      ))}
    </>
  );
};

const BackgroundImage = styled.img`
  // height: ${(props) => props.height}px;
  /* object-fit: contain; */
  /* {calculatedHeight(props)} */
`;

export default SectionList;
