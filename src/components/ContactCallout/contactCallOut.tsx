import styled from "styled-components";
import { ContactItem } from "./contactItem";
import { dataContact } from "../../data/contact";
import { CONTENT_WIDTH } from "../../styles/Constants";

const ContactCallOut = () => (
  <>
    <ContactWrapper>
      {dataContact.map((props) => (
        <>
          <ContactItem
            key={props.id}
            id={props.id}
            shortName={props.shortName}
            address={props.address}
            photo={props.photo}
          />
        </>
      ))}
      ;
    </ContactWrapper>
  </>
);

export default ContactCallOut ;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${CONTENT_WIDTH};
  margin: 30px auto;
`;

