import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BANNER_PADDING_TOP_DESKTOP,
  BANNER_PADDING_TOP_MOBILE,
  BANNER_CONTENT_HEIGHT_DESKTOP,
  BANNER_CONTENT_HEIGHT_MOBILE,
  BREAKPOINT,
  COLOR_CAPTION,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "../../styles/Constants";
import BarColumn from "../Chart/barColumn";
import { TitleBanner } from "components/Title/titleBanner";
import { BannerText } from "components/BannerText/bannerText";
import { BannerChartProps, BarColumnProps } from "api/interfaces";

const BannerChart = (props: BannerChartProps) => {
  return (
    <BannerChartWrapper>
      <ContentArea>
        <ChartSection>
          {props.data.map((item: BarColumnProps) => (
            <BarColumn
              key={item.id}
              id={item.id}
              label={item.label}
              height={item.height}
              color={item.color}
              backgroundColor={item.backgroundColor}
              randomHeight={props.randomHeight}
            />
          ))}
          {!props.randomHeight ? (
            <GraphLegend>
              <div>$1.2T</div>
              <div>$800B</div>
              <div>$400B</div>
              <div style={{ height: 10 }}>&nbsp;</div>
            </GraphLegend>
          ) : null}
        </ChartSection>
        <ChartBottomSpacer />
        <TextSection>
          <TitleBanner title={props.label} color={props.color} />
          <BannerText text={props.text} typing />
        </TextSection>
      </ContentArea>
    </BannerChartWrapper>
  );
};

/* Chart Height */
const chartSectionHeightDesktop = BANNER_CONTENT_HEIGHT_DESKTOP * 0.6;
const chartSectionHeightMobile = BANNER_CONTENT_HEIGHT_MOBILE * 0.5;

/* Spacer Height */
const chartSpacerHeightDesktop = BANNER_CONTENT_HEIGHT_DESKTOP * 0.07;
const chartSpacerHeightMobile = BANNER_CONTENT_HEIGHT_MOBILE * 0.07;

/* Text Height */
const chartTextHeightDesktop =
  BANNER_CONTENT_HEIGHT_DESKTOP -
  (chartSectionHeightDesktop + chartSpacerHeightDesktop);
const chartTextHeightMobile =
  BANNER_CONTENT_HEIGHT_MOBILE -
  (chartSectionHeightMobile + chartSpacerHeightMobile);

const BannerChartWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

const ContentArea = styled.div`
  position: absolute;
  z-index: +1;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    top: ${BANNER_PADDING_TOP_DESKTOP}px;
    height: ${BANNER_CONTENT_HEIGHT_DESKTOP}px;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    top: ${BANNER_PADDING_TOP_MOBILE}px;
    height: ${BANNER_CONTENT_HEIGHT_MOBILE}px;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: gold; */
`;

const ChartSection = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${chartSectionHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${chartSectionHeightMobile}px;
  }
  /* background: blue; */
`;

const ChartBottomSpacer = styled.div`
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${chartSpacerHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${chartSpacerHeightMobile}px;
  }
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
  @media (min-width: ${BREAKPOINT}px) {
    font-size: 1.3em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 1em;
  }
  /* background: green;  */
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${chartTextHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${chartTextHeightMobile}px;
  }
  /* background: green; */
`;

export default BannerChart;