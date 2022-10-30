import styled from "styled-components";
import { COLOR_BASE_3, COLOR_TEXT, COLOR_TITLE_TEXT } from "../../styles/Constants";

interface IGraphProps {
  graphHeight?: number;
  graphTitle?: string;
  graphText?: string;
  backgroundColor: string;
}

interface IGraphColumnProps {
  label?: string;
  size?: number;
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
        <GraphColumn label="Healthtech" size={20}></GraphColumn>
        <GraphColumn label="Medtech" size={30}></GraphColumn>
        <GraphColumn label="Biotech" size={50}></GraphColumn>
        <GraphColumn label="Pharmatech" size={100}></GraphColumn>
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
        <div className="label">{props.label}</div>
        <div className="display" style={{ height: heightPx }} />
      </Column>
    </>
  );
};

const GraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.3em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  min-width: 110px;
  margin: 0 10px;
  .display {
    transition: all 300ms;
    text-align: center;
    margin-top:10px;
  }
  .label {
    color: ${COLOR_TITLE_TEXT};
    text-align: center;
    color:
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
  color: ${COLOR_TEXT};
  text-align: right;
  min-width: 100px;
  margin-left: 30px;;
  /* background: blue; */
`;

export default Graph;
