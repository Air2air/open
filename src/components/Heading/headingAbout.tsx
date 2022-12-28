import Container from "components/Container/container";
import {
  Wrapper,
  TextSection,
  TitleHeading,
} from "./Components/headingComponents";
import { SubHeadHeading } from "components/Heading/Components/subHeadHeading";

const HeadingAbout = (props: { loopEndTime?: number; backgroundColor: any; }) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection>
            <TitleHeading title="About Elevens" />
            <SubHeadHeading text="Elevens supports Healthtech ventures from early private stages through initial public offering (IPO)." />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeadingAbout;
