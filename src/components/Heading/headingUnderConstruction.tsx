import Container from "components/Container/container";
import {
  Wrapper,
  TextSection,
  TitleHeading,
} from "./Components/headingComponents";
import { HeadingSubHead } from "components/Heading/Components/headingSubHead";

const HeadingUnderConstruction = (props: { backgroundColor?: any }) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection>
            <TitleHeading title="Elevens is Under Construction" />
            <HeadingSubHead text="Elevens supports Healthtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners." />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};


export default HeadingUnderConstruction;
