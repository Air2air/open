import styled from "styled-components";
import { COLOR_TEXT } from "../../styles/Constants";

interface IGraphProps {
  graphHeight?: number;
  graphTitle?: string;
  graphText?: string;
  backgroundColor: string;
}

interface IGraphColumnProps {
  label?: string;
  size?: number;
  color?: string;
}

export const Graph = (props: IGraphProps) => {
  const { graphTitle, graphText, backgroundColor, graphHeight } = props;

  const outerHeight = graphHeight + "px";
  const innerHeight = graphHeight! * 0.7 + "px";

  return (
    <GraphContainer
      style={{
        background: backgroundColor && backgroundColor,
        height: outerHeight,
      }}
    >
      {graphTitle ? graphTitle : null}
      {graphText ? graphText : null}
      <GraphWrapper
        style={{
          height: innerHeight,
        }}
      >
        <GraphColumn label="Healthtech" size={20} color="red"></GraphColumn>
        <GraphColumn label="Medtech" size={30} color="gold"></GraphColumn>
        <GraphColumn label="Biotech" size={50} color="green"></GraphColumn>
        <GraphColumn label="Pharmatech" size={100} color="blue"></GraphColumn>
        <GraphLegend>
          <div>$1.2 Trillion</div>
          <div>$800 Billion</div>
          <div>$400 Billion</div>
        </GraphLegend>
      </GraphWrapper>
    </GraphContainer>
  );
};

const GraphWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background: gold; */
`;

const GraphColumn = (props: IGraphColumnProps) => {
  const heightPx = props.size + "%";
  return (
    <>
      <Column>
        <div
          className="display"
          style={{ height: heightPx, background: props.color }}
        >
          {heightPx}
        </div>
        <div className="label">{props.label}</div>
      </Column>
    </>
  );
};

const GraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  margin:10px 0;
  .display {
    width: 70%;
    text-align: center;
  }
  .label {
    color: ${COLOR_TEXT};
  }
  background: red;
`;

const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${COLOR_TEXT};
  /* background: blue; */
`;

export default Graph;
