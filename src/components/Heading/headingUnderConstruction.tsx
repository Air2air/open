import { TitleHeading } from "components/Title/titleHeading";
import { SubHeadHeading } from "components/SubHead/subHeadHeading";
import Container from "components/Container/container";
import { Wrapper, TextSection } from "./Components/headingComponents";

const HeadingUnderConstruction = (props: { backgroundColor?: any }) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection>
            <TitleHeading title="Elevens is Under Construction" />
            <SubHeadHeading text="Elevens supports Healthtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners." />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};


export default HeadingUnderConstruction;
