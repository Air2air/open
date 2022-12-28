import Container from "components/Container/container";
import {
  Wrapper,
  TextSection,
  TitleHeading,
} from "./Components/headingComponents";
import { SubHeadHeading } from "components/Heading/Components/subHeadHeading";

const HeadingContact = (props: { backgroundColor?: any }) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection>
            <TitleHeading title="Contact Elevens.ai" />
            <SubHeadHeading text="" />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};


export default HeadingContact;
