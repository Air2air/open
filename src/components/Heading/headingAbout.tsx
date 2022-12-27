import { TitleHeading } from "components/Title/titleHeading";
import { SubHeadHeading } from "components/SubHead/subHeadHeading";
import Container from "components/Container/container";
import { Wrapper, TextSection } from "./Components/headingComponents";

const HeadingAbout = (props: { backgroundColor?: any }) => {
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
