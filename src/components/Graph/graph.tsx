import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import {
  COLOR_BASE_3,
  COLOR_CAPTION,
  COLOR_TEXT,
  COLOR_TITLE_TEXT,
  CONTENT_WIDTH,
} from "../../styles/Constants";
import Button from "../Button/button";

interface IGraphProps {
  graphHeight?: number;
  graphTitle?: string;
  graphText?: string;
  backgroundColor: string;
  buttonText: string;
  buttonTo: string;
}

interface IGraphColumnProps {
  label?: string;
  size?: number;
  value?: string;
}

export const Graph = (props: IGraphProps) => {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };

  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };

  const { graphTitle, backgroundColor, graphHeight } = props;

  const outerHeight = graphHeight + "px";
  const innerHeight = graphHeight! * 0.6 + "px";

  return (
    <GraphContainer
      style={{
        background: backgroundColor && backgroundColor,
      }}
    >
      <GraphInner
        style={{
          height: outerHeight,
        }}
      >
        <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={30}>
          <h2>{graphTitle}</h2>
        </AnimationOnScroll>
        <GraphWrapper
          style={{
            height: innerHeight,
          }}
        >
          <div
            className="column"
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}
          >
            <GraphColumn
              label="Healthtech"
              size={30}
              value="$400B"
            ></GraphColumn>
          </div>

          <div
            className="column"
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
          >
            <GraphColumn label="Medtech" size={40} value="$500B"></GraphColumn>
          </div>

          <div
            className="column"
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}
          >
            <GraphColumn label="Biotech" size={54} value="$700B"></GraphColumn>
          </div>

          <div
            className="column"
            onMouseOver={handleMouseOver4}
            onMouseOut={handleMouseOut4}
          >
            <GraphColumn
              label="Pharmatech"
              size={100}
              value="$1.2T"
            ></GraphColumn>
          </div>
          <GraphLegend>
            <div>$1.2 Trillion</div>
            <div>$800 Billion</div>
            <div>$400 Billion</div>
            <div style={{ height: 10 }}>&nbsp;</div>
          </GraphLegend>
        </GraphWrapper>
        <div className="content">
          {isHovering1
            ? "Eleven supports Healthtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners."
            : null}
          {isHovering2
            ? "Eleven supports Medtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners."
            : null}
          {isHovering3
            ? "Eleven supports Biotech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners."
            : null}
          {isHovering4
            ? "Eleven supports Pharmatech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners."
            : null}
        </div>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={0}>
          {props.buttonText ? (
            <Button to={props.buttonTo} text={props.buttonText} />
          ) : (
            ""
          )}
        </AnimationOnScroll>
      </GraphInner>
    </GraphContainer>
  );
};

const GraphWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${CONTENT_WIDTH};
  /* background: gold; */
  .column {
    height: 100%;
  }
`;

const GraphInner = styled.div`
  margin: 0 auto;
  padding: 70px 0;
  z-index: +1;
  height: auto;
  width: ${CONTENT_WIDTH};
  text-align: left;
  .content {
    height: auto;
    color: ${COLOR_TEXT};
    transition: all 300ms;
    text-align: left;
    margin: 12px 0;
    font-size: 1.2em;
    line-height: 1.5em;
  }
`;

const GraphColumn = (props: IGraphColumnProps) => {
  const heightPx = props.size + "%";
  return (
    <>
      <Column>
        <div className="label">{props.label}</div>
        <div className="display" style={{ height: heightPx }}>
          {props.value}
        </div>
      </Column>
    </>
  );
};

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  min-width: 110px;
  margin: 0 10px;
  font-size: 1.3em;
  .display {
    color: ${COLOR_TEXT};
    transition: all 300ms;
    text-align: center;
    margin-top: 5px;
    padding-top: 5px;
  }
  .label {
    color: ${COLOR_TITLE_TEXT};
    text-align: center;
  }
  &:hover {
    .display {
      background: ${COLOR_BASE_3};
    }
  }
  /* background: red; */
`;

const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-size: 1.3em;
  color: ${COLOR_CAPTION};
  text-align: right;
  min-width: 120px;
  margin-left: 30px;
  /* background: blue; */
`;

export default Graph;
