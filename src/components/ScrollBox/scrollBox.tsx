import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./styles.scss"

const ScrollBox = () => {
  return (
    <>
    <div className="aos__fade">
      <h1>Hello from Fade Animation On Scroll</h1>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="fadeInUp">
        <div className="aos__fade-box">Box 1</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="fadeInDown">
        <div className="aos__fade-box">Box 2</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="fadeInRight">
        <div className="aos__fade-box">Box 3</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="fadeInLeft">
        <div className="aos__fade-box">Box 4</div>
      </ScrollAnimation>
      <ScrollAnimation
        style={{ margin: "80px 0" }}
        duration={5}
        animateIn="fadeInTopLeft"
      >
        <div className="aos__fade-box">Box 5</div>
      </ScrollAnimation>
      <ScrollAnimation
        style={{ margin: "80px 0" }}
        duration={5}
        animateIn="fadeInTopRight"
      >
        <div className="aos__fade-box">Box 6</div>
      </ScrollAnimation>
    </div></>
  );
};

export default ScrollBox;
