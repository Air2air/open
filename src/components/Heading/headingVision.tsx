import { useEffect, useState } from "react";
import { LoopEndTime } from "../Chart/Vision/chartVision";
import Container from "components/Container/container";
import {
  Wrapper,
  TextSection,
  TitleHeading,
} from "./Components/headingComponents";
import { SubHeadHeading } from "components/Heading/Components/subHeadHeading";

const HeadingVision = (props: { backgroundColor?: any }) => {
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
            <TitleHeading title="Our vision" />
            <SubHeadHeading text="Elevens is a healthcare AI advisory of the leading physicians, scientists, engineers and entrepreneurs in healthcare AI." />
          </TextSection>
          <TextSection style={{ opacity: defineOpacity }}>
            <TitleHeading title="Our vision" />
            <SubHeadHeading text="We define the path forward for leading companies building the future of digital health and clinical machine learning." />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeadingVision;
