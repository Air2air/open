import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
} from "../../styles/Constants";
import { dataPracticeAreas } from "pages/PracticeAreas/dataPracticeAreas";
import BarColumnRandom from "./barColumnRandom";
import Container from "../Container/container";
import { TitleBanner } from "components/Title/titleBanner";
import { BannerText } from "components/BannerText/bannerText";

const BannerChartRandom = (props: any) => {
  return (
    <Container key={props.id}>
      <BannerChartWrapper>
        <ChartSection>
          {dataPracticeAreas.map((item) => (
            <BarColumnRandom
              key={item.id}
              id={item.id}
              label={item.title}
              color={item.color}
              backgroundColor={item.backgroundColor}
            />
          ))}
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
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
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

export default BannerChartRandom;
