import Container from "components/Container/container";
import { FetchData } from "fetch/fetch";

import { ParallaxBanner } from "react-scroll-parallax";
import { SectionTitle } from "./sectionTitle";

const Section = ({ jsonFile }) => {
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
        <ParallaxBanner
          key={index}
          layers={[
            { image: props.imageBackground, speed: -40 },
            {
              speed: -15,
              children: (
                <Container>
                {props.title &&
                  props.title.map((props, index) => (
                    <SectionTitle
                      key={index}
                      {...props}
                    />
                  ))}
              </Container>
              ),
            },
            // { image: "/static/banner-foreground.png", speed: -10 },
          ]}
          style={{
            height: props.height + "px",
            backgroundColor: props.backgroundColor}}
        />
      ))}
    </>
  );
};

export default Section;
