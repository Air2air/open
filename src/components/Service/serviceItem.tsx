import styled from "styled-components";
import {
  BREAKPOINT_PX,
  COLOR_BASE_3,
  COLOR_BASE_LIGHT,
  COLOR_TEXT,
} from "../../styles/Constants";
import parse from "html-react-parser";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const ServiceItemLeft = ({ id, title, desc }) => {
  const descParsed = parse(desc);
  // const side  = ''

  return (
    <AnimationOnScroll key={id} animateIn="animate__fadeInLeft" delay={0}>
      <ServiceItemWrapper>
        <ServiceContent>
          <h3>{title}</h3>
          <ServiceItemDesc>{descParsed}</ServiceItemDesc>
        </ServiceContent>
        <ServiceItemLineBox>
          <div
            id={id}
            className="line animate__animated animate__slideInLeft animate__delay-1s"
          ></div>
        </ServiceItemLineBox>
      </ServiceItemWrapper>
    </AnimationOnScroll>
  );
};

export const ServiceItemRight = ({ id, title, desc }) => {
  const descParsed = parse(desc);
  // const side  = ''

  return (
    <AnimationOnScroll key={id} animateIn="animate__fadeInRight" delay={0}>
      <ServiceItemWrapper>
        <ServiceItemLineBox>
          <div
            id={id}
            className="line animate__animated animate__slideInRight animate__delay-1s"
          ></div>
        </ServiceItemLineBox>
        <ServiceContent>
          <h3>{title}</h3>
          <ServiceItemDesc>{descParsed}</ServiceItemDesc>
        </ServiceContent>
      </ServiceItemWrapper>
    </AnimationOnScroll>
  );
};

export const ServiceItemCombined = ({ id, title, desc }) => {
  const descParsed = parse(desc);
  return (
    <AnimationOnScroll key={id} animateIn="animate__fadeInUp" offset={150}>
      <ServiceItemWrapper>
        <ServiceContent>
          <h3>{title}</h3>
          <ServiceItemDesc>{descParsed}</ServiceItemDesc>
        </ServiceContent>
      </ServiceItemWrapper>
    </AnimationOnScroll>
  );
};

const ServiceItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  margin-top: 14px;
  margin-bottom: 14px;
`;

const ServiceContent = styled.div`
  z-index: +1;
  display: flex;
  flex-direction: column;
  height: auto;
  border-radius: 6px;
  width: 90%;
  background: ${COLOR_BASE_3};
  @media (min-width: ${BREAKPOINT_PX}) {
    padding: 32px;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    padding: 28px 14px;
  }
`;

const ServiceItemLineBox = styled.div`
  height: auto;
  width: 10%;
  display: flex;
  align-items: flex-end;
  .line {
    height: 50%;
    width: 100%;
    border-top: 2px solid ${COLOR_BASE_LIGHT};
    /* opacity: 0; */
  }
`;

const ServiceItemDesc = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 1.6em;
  color: ${COLOR_TEXT};
`;
