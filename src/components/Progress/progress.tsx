import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BREAKPOINT_PX,
  COLOR_BASE,
  COLOR_BASE_5,
} from "../../styles/Constants";

const ProgressBar = (): JSX.Element => {
  const [scrolled, setScrolled] = useState("");
  const [visible, setVisible] = useState(false);

  const showHide = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const viewportHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    setScrolled(
      `${(document.documentElement.scrollTop / viewportHeight) * 100}%`
    );

    showHide();
  };

  return (
    <ProgressContainer
      style={{
        backgroundColor: visible ? COLOR_BASE : "transparent",
      }}
    >
      <Indicator
        style={{
          height: scrolled,
          width: "5px",
          backgroundColor: visible ? COLOR_BASE_5 : "transparent",
        }}
      >
        &nbsp;
      </Indicator>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  position: fixed;
  height: 120px;
  width: 5px;
  margin-left: 10px;
  transition: all 0.7s;
  @media (min-width: ${BREAKPOINT_PX}) {
    top: 50%;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    top: 50%;
  }
`;

const Indicator = styled.div`
  /* margin-left: 10px; */
`;

export default ProgressBar;
