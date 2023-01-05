import Container from "components/Container/container";
import {
  Wrapper,
  TextSection,
  TitleHeading,
} from "./Components/headingComponents";
import { HeadingSubHead } from "components/Heading/Components/headingSubHead";

const HeadingContact = (props: { backgroundColor?: any }) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection>
            <TitleHeading title="Contact Elevens.ai" />
            <HeadingSubHead text="" />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};


export default HeadingContact;
