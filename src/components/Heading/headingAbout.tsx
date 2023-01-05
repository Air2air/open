import Container from "components/Container/container";
import {
  Wrapper,
  TextSection,
  TitleHeading,
} from "./Components/headingComponents";
import { HeadingSubHead } from "components/Heading/Components/headingSubHead";

const HeadingAbout = (props: { loopEndTime?: number; backgroundColor: any; }) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection>
            <TitleHeading title="About Elevens" />
            <HeadingSubHead text="Elevens supports Healthtech ventures from early private stages through initial public offering (IPO)." />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeadingAbout;
