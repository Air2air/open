import { TitleHeading } from "components/Title/titleHeading";
import { SubHeadHeading } from "components/SubHead/subHeadHeading";
import styled from "styled-components";
import {
  BREAKPOINT,
  CHART_TEXT_TRANSITION,
  HEADING_HEIGHT_DESKTOP,
  HEADING_HEIGHT_MOBILE,
} from "constants/index";
import Container from "components/Container/container";

const HeadingAbout = (props: { backgroundColor?: any }) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection>
            <TitleHeading title="About Elevens" />
            <SubHeadHeading text="Elevens supports Healthtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners" />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${HEADING_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${HEADING_HEIGHT_MOBILE}px;
  }
  /* background: blue; */
`;

const TextSection = styled.div`
  position: absolute;
  top: 0;
  transition: all ${CHART_TEXT_TRANSITION}ms;
  width: 100%;
  height: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    min-height: ${HEADING_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    min-height: ${HEADING_HEIGHT_MOBILE}px;
  }
  /* background: green; */
`;

export default HeadingAbout;
