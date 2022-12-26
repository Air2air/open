import { TitleHeading } from "components/Title/titleHeading";
import { SubHeadHeading } from "components/SubHead/subHeadHeading";
import Container from "components/Container/container";
import { TextSection } from "./headingTextSection";
import { Wrapper } from "./headingWrapper";

const HeadingHistory = (props: { backgroundColor?: any }) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection>
            <TitleHeading title="Elevens History" />
            <SubHeadHeading text="" />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};


export default HeadingHistory;
