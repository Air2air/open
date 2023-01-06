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
            <HeadingSubHead text="Data fetch error" />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeadingAbout;
