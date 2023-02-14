import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  CallOutInner,
  CallOutOuter,
  VariantText,
  VariantTitle,
} from "./calloutComponents";

const Callout = (props) => {
  return (
    <>
      <CallOutOuter style={{ background: props.backgroundColor }}>
        <CallOutInner>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={60}>
            <VariantTitle>{props.title} </VariantTitle>
            <VariantText>{props.text} </VariantText>
          </AnimationOnScroll>
        </CallOutInner>
      </CallOutOuter>
    </>
  );
};

export default Callout;
