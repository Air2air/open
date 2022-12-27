


import { TitleHeading } from "components/Title/titleHeading";
import { SubHeadHeading } from "components/SubHead/subHeadHeading";
import { useEffect, useState } from "react";
import { LoopEndTime } from "../Chart/Vision/chartVision";
import Container from "components/Container/container";
import { Wrapper, TextSection } from "./Components/headingComponents";

const HeadingCaseStudies = (props: { backgroundColor?: any }) => {
  const [advisoryOpacity, setAdvisoryOpacity] = useState(0);
  const [defineOpacity, setDefineOpacity] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const advisoryStart = setTimeout(() => {
      setAdvisoryOpacity(1);
    }, 1000);

    const advisoryEnd = setTimeout(() => {
      setAdvisoryOpacity(0);
    }, 6000);

    const defineStart = setTimeout(() => {
      setDefineOpacity(1);
    }, 7000);

    const defineEnd = setTimeout(() => {
      setDefineOpacity(0);
    }, LoopEndTime - 1000);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(advisoryStart);
      clearTimeout(advisoryEnd);
      clearTimeout(defineStart);
      clearTimeout(defineEnd);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
      <Wrapper>
        <TextSection style={{ opacity: advisoryOpacity }}>
          <TitleHeading title="Case Studies" />
          <SubHeadHeading text="Elevens supports Healthtech ventures from early private stages through initial public offering (IPO)..." />
        </TextSection>
        <TextSection style={{ opacity: defineOpacity }}>
          <TitleHeading title="Case Studies" />
          <SubHeadHeading text="...and assists public companies to identify innovative private sector partners." />
        </TextSection>
      </Wrapper>
      </Container>
    </>
  );
};

export default HeadingCaseStudies;
