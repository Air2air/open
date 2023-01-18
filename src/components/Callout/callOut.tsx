import { TitleCallout } from "components/Callout/titleCallout";
import { AnimationOnScroll } from "react-animation-on-scroll";

import parse from "html-react-parser";
import {
  CalloutContainerInner,
  CalloutContainerOuter,
  CalloutParagraph,
} from "./calloutComponents";
import { assignCalloutColor } from "utils/assignCalloutColor";

const Callout = (props) => {
  const textParsed = props.text
    ? parse(props.text)
    : "Data fetch error in Text";

  return (
    <>
      <CalloutContainerOuter style={{
          backgroundColor: assignCalloutColor(props.backgroundColor),
        }}>
        <CalloutContainerInner>
          <TitleCallout title={props.title} />
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={60}>
            <CalloutParagraph>{textParsed}</CalloutParagraph>
          </AnimationOnScroll>
        </CalloutContainerInner>
      </CalloutContainerOuter>
    </>
  );
};

export default Callout;
