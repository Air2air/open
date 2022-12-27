import { TitleHeading } from "components/Title/titleHeading";
import { SubHeadHeading } from "components/SubHead/subHeadHeading";
import Container from "components/Container/container";
import { Wrapper, TextSection } from "./Components/headingComponents";

const HeadingCaseStudies = (props: { backgroundColor?: any }) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection>
            <TitleHeading title="Case Studies" />
            <SubHeadHeading text="Elevens supports Healthtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners" />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeadingCaseStudies;
