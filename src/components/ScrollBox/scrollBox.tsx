
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./styles.scss";

const ScrollBox = () => {
  return (
    <>
      <AnimationOnScroll animateIn="animate__tada">
        <h2>Look what i am doing</h2>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <h5>Look me too.</h5>
      </AnimationOnScroll>
    </>
  );
};

export default ScrollBox;
