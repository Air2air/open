import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import {
  COLOR_BASE_3,
  COLOR_BASE_5,
  COLOR_BASE_6,
  COLOR_CAPTION,
  COLOR_TEXT,
  COLOR_TITLE_TEXT,
} from "../../styles/Constants";
import Button from "../Button/button";
import Container from "../Container/container";
import { TitleCallout } from "../Title/titleCallout";

interface IGraphProps {
  graphHeight?: number;
  graphTitle?: string;
  graphText?: string;
  backgroundColor: string;
  buttonText: string;
  buttonTo: string;
}

/*
const dataGraph = [
  {
    label: "Health",
    size: 20,
    value: "$400B",
    text: "Eleven supports Healthtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
  {
    label: "Medtech",
    size: 30,
    value: "$500B",
    text: "Eleven supports Medtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
  {
    label: "Biotech",
    size: 50,
    value: "$700B",
    text: "Eleven supports Biotech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
  {
    label: "Pharma",
    size: 100,
    value: "$1.2T",
    text: "Eleven supports Pharmatech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
];
*/
const graphHeight = "200px";

const GraphMap = (index) => {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const graphSeries = (
    <>
      <GraphSeriesWrapper>
        <SeriesColumn
          onMouseEnter={() => setIsHovering1(true)}
          onMouseLeave={() => setIsHovering1(false)}
        >
          <SeriesLabel>Health</SeriesLabel>
          <SeriesBar
            animateIn="animate__fadeInUp"
            delay={0}
            style={{ height: "20%" }}
          >
            $400B
          </SeriesBar>
        </SeriesColumn>

        <SeriesColumn
          onMouseEnter={() => setIsHovering2(true)}
          onMouseLeave={() => setIsHovering2(false)}
        >
          <SeriesLabel>Medtech</SeriesLabel>
          <SeriesBar
            animateIn="animate__fadeInUp"
            delay={0}
            style={{ height: "30%" }}
          >
            $500B
          </SeriesBar>
        </SeriesColumn>

        <SeriesColumn
          onMouseEnter={() => setIsHovering3(true)}
          onMouseLeave={() => setIsHovering3(false)}
        >
          <SeriesLabel>Biotech</SeriesLabel>
          <SeriesBar
            animateIn="animate__fadeInUp"
            delay={0}
            style={{ height: "50%" }}
          >
            $700B
          </SeriesBar>
        </SeriesColumn>

        <SeriesColumn
          onMouseEnter={() => setIsHovering4(true)}
          onMouseLeave={() => setIsHovering4(false)}
        >
          <SeriesLabel>Pharma</SeriesLabel>
          <SeriesBar
            animateIn="animate__fadeInUp"
            delay={0}
            style={{ height: "100%" }}
          >
            $1.2T
          </SeriesBar>
        </SeriesColumn>

        <GraphLegend>
          <div>$1.2T</div>
          <div>$800B</div>
          <div>$400B</div>
          <div style={{ height: 10 }}>&nbsp;</div>
        </GraphLegend>
      </GraphSeriesWrapper>
      <GraphContent>
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
          : null}{" "}
      </GraphContent>
    </>
  );

  return <>{graphSeries}</>;
};

export const Graph = (props: IGraphProps) => {
  const { graphTitle } = props;
  return (
    <Container>
      <TitleCallout titleText={graphTitle} />
      <GraphMap />
      <Button to="/vision" text="Vision" />
    </Container>
  );
};

const GraphSeriesWrapper = styled.div`
  height: ${graphHeight};
  margin: 0 auto;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  border-bottom: 2px solid ${COLOR_BASE_6};
`;

const SeriesColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${graphHeight};
  font-size: 1.3em;
  background: ${COLOR_BASE_3};
`;

const SeriesBar = styled(AnimationOnScroll)`
  color: ${COLOR_TEXT};
  transition: all 300ms;
  text-align: center;
  margin-top: 5px;
  padding-top: 5px;
  background: ${COLOR_BASE_6};
  &:hover {
    background: ${COLOR_BASE_5};
  }
`;

const SeriesLabel = styled.div`
  color: ${COLOR_TITLE_TEXT};
  text-align: center;
`;

const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: ${graphHeight};
  font-size: 1.3em;
  color: ${COLOR_CAPTION};
`;

const GraphContent = styled.div`
  height: auto;
  min-height: 70px;
  color: ${COLOR_TEXT};
  text-align: left;
  margin: 12px 0;
  font-size: 1.2em;
  line-height: 1.5em;
  transition: all 300ms;
`;

export default Graph;
