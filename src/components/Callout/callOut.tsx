import parse from "html-react-parser";
import { ParallaxBanner } from "react-scroll-parallax";
import { Circle } from "./calloutComponents";

type CalloutProps = {
  id: number;
  title: string;
  text: string;
  image: string;
  height: number;
  variant: string;
};

// create types for props

const Callout = (props: CalloutProps) => {
  const textParsed = props.text
    ? parse(props.text)
    : "Data fetch error in Text";

  return (
    <>
      <ParallaxBanner
        layers={[{ image:props.image, speed: -15 }]}
      >
        <div style={{ height: `${props.height}px` }}>
          {props.title}
          {textParsed}
        </div>
      </ParallaxBanner>
    </>
  );
};

export default Callout;
