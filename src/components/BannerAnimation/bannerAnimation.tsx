import styled from "styled-components";
import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BREAKPOINT_PX,
} from "../../styles/Constants";
import { dataAnimation } from "./dataAnimation";
import AnimatedColumn from "./animatedColumn";
import Container from "../Container/container";
import { TitleBanner } from "components/Title/titleBanner";

const BannerAnimation = () => {
  return (
    <>
      <Container>
        <BannerAnimationWrapper>
          <AnimationSection>
            {dataAnimation.map((item) => (
              <AnimatedColumn id={item.id} label={item.label} />
            ))}
          </AnimationSection>
          <TextSection>
            <TitleBanner title="We know how to juggle." />
            </TextSection>
        </BannerAnimationWrapper>
      </Container>
    </>
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
    height: ${BANNER_HEIGHT_MOBILE_PX};
  }
`;

const AnimationSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 40%;
  /* background: blue; */
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 30%;
  /* background: blue; */
`;

export default BannerAnimation;
