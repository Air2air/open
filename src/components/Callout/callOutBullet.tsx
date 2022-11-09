import {
  BREAKPOINT_PX,
  CALLOUT_HEIGHT_PX,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
  COLOR_BASE_6,
  COLOR_BASE_LIGHT,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  TEXT_OPACITY,
} from "../../styles/Constants";
import styled from "styled-components";
import Button from "../Button/button";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";
import { TitleCallout } from "../Title/titleCallout";

interface IInnerSectionProps {
  id: number;
  calloutTitle: string;
  calloutText: string;
  side?: string;
  backgroundColor?: any;
}

export const CalloutBullet = (props: IInnerSectionProps) => {
  const { calloutTitle, calloutText, backgroundColor } = props;

  const calloutTitleParsed = parse(calloutTitle);
  const calloutTextParsed = parse(calloutText);

  const assignBackgroundColor = (props) => {
    if (props.backgroundColor === 1) {
      return COLOR_BASE_1;
    } else if (props.backgroundColor === 2) {
      return COLOR_BASE_2;
    } else if (props.backgroundColor === 3) {
      return COLOR_BASE_3;
    } else if (props.backgroundColor === 4) {
      return COLOR_BASE_4;
    } else if (props.backgroundColor === 5) {
      return COLOR_BASE_5;
    } else {  
      return COLOR_BASE_6;
    }
  };

  return (
    <>
      <CalloutContainer style={{ background: assignBackgroundColor(props) }}>
        {props.id % 2 === 0 ? (
          <InnerSection>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              delay={0}
              offset={60}
            >
              <CalloutNumber className="left">{props.id}</CalloutNumber>
            </AnimationOnScroll>
            <TextRow>
              <TitleCallout titleText={calloutTitleParsed} />
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                delay={100}
                offset={60}
              >
                <CalloutParagraph>{calloutTextParsed}</CalloutParagraph>
              </AnimationOnScroll>
            </TextRow>
          </InnerSection>
        ) : (
          <InnerSection>
            <TextRow>
              <TitleCallout titleText={calloutTitleParsed} />
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                delay={100}
                offset={60}
              >
                <CalloutParagraph>{calloutTextParsed}</CalloutParagraph>
              </AnimationOnScroll>
            </TextRow>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              delay={0}
              offset={60}
            >
              <CalloutNumber className="right">{props.id}</CalloutNumber>
            </AnimationOnScroll>
          </InnerSection>
        )}
      </CalloutContainer>
    </>
  );
};

const CalloutContainer = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  min-height: ${CALLOUT_HEIGHT_PX};
`;

const InnerSection = styled.div`
  display: flex;
  margin: 0 auto;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT_PX}) {
    padding: 50px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    padding: 20px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;

const TextRow = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  /* background: ${COLOR_BASE_LIGHT}; */
`;

const CalloutNumber = styled.div`
  color: ${COLOR_BASE_LIGHT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  height: auto;
  /* background: red; */
  &.right {
    text-align: right;
  }
  &.left {
    text-align: left;
  }
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 6rem;
    min-width: 140px;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 3rem;
    min-width: 80px;
  }
`;

const CalloutParagraph = styled.div`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
  /* padding-bottom: 20px; */
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 1.3em;
    line-height: 1.7em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1.1em;
    line-height: 1.7em;
  }
`;

export default CalloutBullet;
