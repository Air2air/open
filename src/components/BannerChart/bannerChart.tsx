import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BANNER_PADDING_TOP_DESKTOP,
  BANNER_PADDING_TOP_MOBILE,
  BREAKPOINT_PX,
  COLOR_CAPTION,
} from "../../styles/Constants";
import BarColumn from "./barColumn";
import Container from "../Container/container";
import { TitleBanner } from "components/Title/titleBanner";
import { BannerText } from "components/BannerText/bannerText";
import { Key } from "react";

const BannerChart = (props: any) => {
  return (
    <Container key={props.id}>
      <BannerChartWrapper>
        <ChartSection>
          {props.data.map(
            (item: {
              id: Key;
              label: string;
              size: number;
              color: string;
              backgroundColor: string;
            }) => (
              <BarColumn
                key={item.id}
                id={item.id}
                height={item.size}
                label={item.label}
                color={item.color}
                backgroundColor={item.backgroundColor}
              />
            )
          )}
          <GraphLegend>
            <div>$1.2T</div>
            <div>$800B</div>
            <div>$400B</div>
            <div style={{ height: 10 }}>&nbsp;</div>
          </GraphLegend>
        </ChartSection>
        <ChartBottomSpacer />
        <TextSection>
          <TitleBanner title={props.title} color={props.color} />
          <BannerText text={props.text} typing />
        </TextSection>
      </BannerChartWrapper>
    </Container>
  );
};

const BannerChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
    padding-top: ${BANNER_PADDING_TOP_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
    padding-top: ${BANNER_PADDING_TOP_MOBILE};
  }
  /* background: gold; */
`;

const ChartSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${BREAKPOINT_PX}) {
    height: 34%;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    padding-top: 30%;
    height: 45%;
  }
  /* background: blue; */
`;

const ChartBottomSpacer = styled.div`
  width: 100%;
  height: 10%;
  /* background: red; */
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
  /* background: green;  */
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${BREAKPOINT_PX}) {
    height: 30%;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: 40%;
  }
  /* background: green; */
`;

export default BannerChart;
