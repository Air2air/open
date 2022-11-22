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
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";
import { TitleCallout } from "components/Title/titleCallout";
import Button from "../Button/button";


export interface ICalloutChartProps {
  id: number;
  title?: any;
  text: string;
  side?: string;
  color?: string;
  backgroundColor?: any;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: any;
}


export const CalloutChart = (props: ICalloutChartProps) => {

  const textParsed = parse(props.text);

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
            <TextRow>
            <TitleCallout title={props.title} color={props.color} />
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                delay={100}
                offset={60}
              >
                <CalloutParagraph>{textParsed}</CalloutParagraph>
                {props.buttonText ?             <Button
              buttonTo={props.buttonTo}
              buttonText={props.buttonText}
              buttonColor={props.buttonColor}
            /> : null} 
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
        ) : (
          <InnerSection>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              delay={0}
              offset={60}
            >
              <CalloutNumber className="left">{props.id}</CalloutNumber>
            </AnimationOnScroll>
            <TextRow>
              <TitleCallout title={props.title} />
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                delay={100}
                offset={60}
              >
                <CalloutParagraph>{textParsed}</CalloutParagraph>
                {props.buttonText ?             <Button
              buttonTo={props.buttonTo}
              buttonText={props.buttonText}
              buttonColor={props.buttonColor}
            /> : null} 
              </AnimationOnScroll>
            </TextRow>
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
    padding: 30px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;

const TextRow = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  /* background: ${COLOR_BASE_LIGHT}; */
`;

const numberSizeDesktop = '110px';
const numberSizeMobile = '90px';

const CalloutNumber = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Unica One", cursive;
  text-align: center;
  border-radius: 50%;
  letter-spacing: -0.06em;
  color: rgba(0, 0, 0, 0.35);
  background: rgba(255, 255, 255, 0.1);
  /* background: red; */
  &.right {
    margin-left:30px;
  }
  &.left {
    margin-right:30px;
  }
  @media (min-width: ${BREAKPOINT_PX}) {
    width:${numberSizeDesktop};
    height: ${numberSizeDesktop};
    font-size: 4rem;
    line-height: ${numberSizeDesktop};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    width:${numberSizeMobile};
    height: ${numberSizeMobile};
    font-size: 3rem;
    line-height: ${numberSizeMobile};
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

export default CalloutChart;
