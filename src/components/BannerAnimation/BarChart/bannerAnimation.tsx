import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
} from "../../../styles/Constants";
import { dataPracticeAreas } from "pages/PracticeAreas/dataPracticeAreas";
import AnimatedColumn from "./animatedColumn";
import Container from "../../Container/container";
import { TitleBanner } from "components/Title/titleBanner";
import { BannerText } from "components/BannerText/bannerText";

const BannerAnimation = (props: any) => {
  return (
    <Container key={props.id}>
      <BannerAnimationWrapper>
        <AnimationSection>
          {dataPracticeAreas.map((item) => (
            <AnimatedColumn
              key={item.id}
              id={item.id}
              title={item.title}
              color={item.color}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </AnimationSection>
        <SectionSpacer />
        <TextSection>
          <TitleBanner title={props.title} color={props.color} />
          <BannerText bannerText={props.text} typing />
        </TextSection>
      </BannerAnimationWrapper>
    </Container>
  );
};

const BannerAnimationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  /* background: gold; */
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    /* padding: 40px auto 0 auto; */
    height: ${BANNER_HEIGHT_MOBILE_PX};
  }
`;

const AnimationSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  /* background: blue; */
  @media (min-width: ${BREAKPOINT_PX}) {
    height: 40%;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    padding-top: 30%;
    height: 45%;
  }
`;

const SectionSpacer = styled.div`
  width: 100%;
  height: 10%;
  /* background: red; */
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background: green; */
  @media (min-width: ${BREAKPOINT_PX}) {
    height: 30%;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: 40%;
  }
`;

export default BannerAnimation;
