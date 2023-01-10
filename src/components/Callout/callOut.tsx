import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";
import { TitleCallout } from "components/Title/titleCallout";
import Container from "components/Container/container";

import { CallOutInner, CalloutParagraph } from "./calloutComponents";

export const Callout = (props) => {
  const textParsed = props.text
    ? parse(props.text)
    : "Data fetch error in Text";

  return (
    <>
      <Container {...props}>
        <CallOutInner>
          <TitleCallout title={props.title} />
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={60}>
            <CalloutParagraph>{textParsed}</CalloutParagraph>
          </AnimationOnScroll>
        </CallOutInner>
      </Container>
    </>
  );
};

export default Callout;
