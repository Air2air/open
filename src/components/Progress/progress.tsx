import { useState, useEffect } from "react";
import styled from "styled-components";

const ProgressBar = (): JSX.Element => {
  const [scrolled, setScrolled] = useState("");
  const [visible, setVisible] = useState(false);

  const showHide = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1400);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  const onScroll = () => {
    const viewportHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    setScrolled(
      `${(document.documentElement.scrollTop / viewportHeight) * 100}%`
    );

    showHide();
  };

  return (
    <ProgressContainer>
      <ProgressInner>
        <Indicator
          style={{
            height: "100%",
          }}
        >
          <IndicatorBackGrounds>
            <IndicatorLeftBackGround
              style={{
                backgroundColor: visible
                  ? "rgba(0,0,0,0.3)"
                  : "transparent",
              }}
            />
            <IndicatorRightBackGround>
              <div
                style={{
                  borderTop: visible ? "1px solid gray" : "transparent",
                }}
              />
              <div
                style={{
                  borderTop: visible ? "1px solid gray" : "transparent",
                }}
              />
              <div
                style={{
                  borderTop: visible ? "1px solid gray" : "transparent",
                  borderBottom: visible ? "1px solid gray" : "transparent",
                }}
              />
            </IndicatorRightBackGround>
          </IndicatorBackGrounds>
          <IndicatorLeft
            style={{
              height: scrolled,
              backgroundColor: visible
                ? "rgba(255,255,255,0.2)"
                : "transparent",
              borderBottom: visible ? "1px solid gray" : "transparent",
            }}
          />

          <IndicatorRight
            style={{
              height: scrolled,
              borderBottom: visible ? "1px solid gray" : "transparent",
            }}
          ></IndicatorRight>
        </Indicator>
      </ProgressInner>
    </ProgressContainer>
  );
};

const transition = `all 0.4s`;
const columnWidth = 8;

const ProgressContainer = styled.div`
  position: fixed;
  height: 120px;
  width: ${columnWidth * 2}px;
  padding-left: ${columnWidth}px;
  top: 50%;
  /* background: red; */
`;

const ProgressInner = styled.div`
  position: absolute;
  top: 0;
  height: 120px;
  width: ${columnWidth * 2}px;
  transition: ${transition};
`;

const Indicator = styled.div`
  display: flex;
  width: ${columnWidth * 2}px;
  transition: ${transition};
  /* background: gold; */
`;

const IndicatorBackGrounds = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  width: ${columnWidth * 2}px;
  transition: ${transition};
`;

const IndicatorLeftBackGround = styled.div`
  height: 100%;
  width: ${columnWidth}px;
  transition: ${transition};
`;

const IndicatorRightBackGround = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${columnWidth}px;
  transition: ${transition};
  /* background: red; */
  div {
    flex: 1;
  }
`;

const IndicatorLeft = styled.div`
  width: ${columnWidth}px;
  transition: ${transition};
`;

const IndicatorRight = styled.div`
  display: flex;
  flex-direction: column;
  width: ${columnWidth}px;
  transition: ${transition};
  border-bottom: 1px solid gray;
`;

export default ProgressBar;
