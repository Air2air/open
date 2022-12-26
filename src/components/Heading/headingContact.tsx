import { TitleHeading } from "components/Title/titleHeading";
import { SubHeadHeading } from "components/SubHead/subHeadHeading";
import Container from "components/Container/container";
import { TextSection } from "./headingTextSection";
import { Wrapper } from "./headingWrapper";

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
