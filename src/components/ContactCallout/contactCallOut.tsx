import styled from "styled-components";
import { ContactItem } from "./contactItem";
import { dataContact } from "./dataContact";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "../../styles/Constants";

const ContactCallout = () => {
  return (
    <>
      <ContactWrapper>
        {dataContact.map((props) => (
          <ContactItem {...props} key={props.id} />
        ))}
        ;
      </ContactWrapper>
    </>
  );
};

export default ContactCallout;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 70px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 40px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;
