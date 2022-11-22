import styled from "styled-components";
import {
  BREAKPOINT_PX,
  COLOR_BASE_6,
  COLOR_CAPTION,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "./../../styles/Constants";
import { dataGraph } from "./dataGraph";
import SeriesColumn from "./seriesColumn";
import { IGraphProps } from "api/interfaces";
import { TitleCallout } from "./../Title/titleCallout";
import Container from "./../Container/container";

export const Graph = (props: IGraphProps) => {
  return (
    <>
      <Container>
        <TitleCallout title="Mid Decade Market Projections" />
        <GraphSeriesWrapper style={{ height: props.size }}>
          {dataGraph.map((item) => (
            <SeriesColumn
              id={item.id}
              label={item.label}
              value={item.value}
              size={item.size}
              background={item.background}
              outerHeight={props.size}
            />
          ))}
          <GraphLegend>
            <div>$1.2T</div>
            <div>$800B</div>
            <div>$400B</div>
            <div style={{ height: 10 }}>&nbsp;</div>
          </GraphLegend>
        </GraphSeriesWrapper>

      </Container>
    </>
  );
};

const GraphSeriesWrapper = styled.div`
  padding: 40px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  border-bottom: 2px solid ${COLOR_BASE_6};
  @media (min-width: ${BREAKPOINT_PX}) {
    gap: 30px;
    /* width: ${CONTENT_WIDTH_DESKTOP}; */
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    gap: 5px;
    /* width: ${CONTENT_WIDTH_MOBILE}; */
  }
`;

const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: "100%";
  font-size: 1.3em;
  color: ${COLOR_CAPTION};
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 1.3em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1em;
  }
`;

export default Graph;
