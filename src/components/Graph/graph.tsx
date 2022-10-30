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
          <GraphColumn label="Healthtech" size={30} value="$400B"></GraphColumn>
          <GraphColumn label="Medtech" size={40} value="$500B"></GraphColumn>
          <GraphColumn label="Biotech" size={54} value="$700B"></GraphColumn>
          <GraphColumn
            label="Pharmatech"
            size={100}
            value="$1.2T"
          ></GraphColumn>
          <GraphLegend>
            <div>$1.2 Trillion</div>
            <div>$800 Billion</div>
            <div>$400 Billion</div>
            <div style={{ height: 10 }}>&nbsp;</div>
          </GraphLegend>
        </GraphWrapper>
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
`;

const GraphInner = styled.div`
  margin: 0 auto;
  padding: 70px 0;
  z-index: +1;
  height: auto;
  width: ${CONTENT_WIDTH};
  text-align: left;
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
