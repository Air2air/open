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
import { TitleCallOut } from "../Title/titleCallOut";
import Button from "../Button/button";
import {ICallOutBulletProps} from "../../api/interfaces";


export const CallOutBullet = (props: ICallOutBulletProps) => {

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
      <CallOutContainer style={{ background: assignBackgroundColor(props) }}>
        {props.id % 2 === 0 ? (
          <InnerSection>
            <TextRow>
              <TitleCallOut title={props.title} />
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                delay={100}
                offset={60}
              >
                <CallOutParagraph>{textParsed}</CallOutParagraph>
                {props.buttonText ? <Button to={props.buttonTo} text={props.buttonText} /> : ""}
              </AnimationOnScroll>
            </TextRow>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              delay={0}
              offset={60}
            >
              <CallOutNumber className="right">{props.id}</CallOutNumber>
            </AnimationOnScroll>
          </InnerSection>
        ) : (
          <InnerSection>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              delay={0}
              offset={60}
            >
              <CallOutNumber className="left">{props.id}</CallOutNumber>
            </AnimationOnScroll>
            <TextRow>
              <TitleCallOut title={props.title} />
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                delay={100}
                offset={60}
              >
                <CallOutParagraph>{textParsed}</CallOutParagraph>
                {props.buttonText ? <Button to={props.buttonTo} text={props.buttonText} /> : ""}
              </AnimationOnScroll>
            </TextRow>
          </InnerSection>
        )}
      </CallOutContainer>
    </>
  );
};

const CallOutContainer = styled.div`
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

const CallOutNumber = styled.div`
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

const CallOutParagraph = styled.div`
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

export default CallOutBullet;
