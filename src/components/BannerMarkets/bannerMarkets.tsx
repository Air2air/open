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
  CHART_LABEL_DESKTOP,
  CHART_LABEL_MOBILE,
  CHART_SPACER_HEIGHT_DESKTOP,
  CHART_SPACER_HEIGHT_MOBILE,
  CHART_SECTION_HEIGHT_MOBILE,
  CHART_SECTION_HEIGHT_DESKTOP,
  CHART_TEXT_HEIGHT_DESKTOP,
  CHART_TEXT_HEIGHT_MOBILE,
} from "constants/index";
import BarColumn from "../BarColumn/barColumn";
import { TitleBanner } from "components/Title/titleBanner";
import { BannerText } from "components/BannerText/bannerText";
import { IBannerMarketsProps, IBarColumnProps } from "interfaces/callouts";

const BannerMarkets = (props: IBannerMarketsProps) => {
  return (
    <BannerMarketsWrapper>
      <ContentArea>
        <ChartSection>
          {props.data.map((item: IBarColumnProps) => (
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
    </BannerMarketsWrapper>
  );
};


const BannerMarketsWrapper = styled.div`
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
    height: ${CHART_SECTION_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_SECTION_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
`;

const ChartBottomSpacer = styled.div`
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_SPACER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_SPACER_HEIGHT_MOBILE}px;
  }
  /* background: red; */
`;

const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: "100%";
  font-size: ${CHART_LABEL_DESKTOP};
  color: ${COLOR_CAPTION};
  @media (min-width: ${BREAKPOINT}px) {
    font-size: ${CHART_LABEL_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: ${CHART_LABEL_MOBILE};
  }
  /* background: green;  */
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CHART_TEXT_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CHART_TEXT_HEIGHT_MOBILE}px;
  }
  /* background: green; */
`;

export default BannerMarkets;