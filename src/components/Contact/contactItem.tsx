import Button from "components/Button/button";

import Spacer from "components/Spacer/spacer";
import { assignCalloutColor } from "utils/assignCalloutColor";
import {
  ContactItemContainer,
  ContactContent,
  ContactTitle,
  ContactItemDesc,
  ContactItemLink,
  ContactImageWrapper,
} from "./contactComponents";

const ContactItem = (props) => {
  const backgroundImageString = (photo) => "url(/images/content/" + photo + ")";

  return (
    <>
      <ContactItemContainer
        style={{
          backgroundColor: assignCalloutColor(props.backgroundColor),
        }}
      >
        <ContactContent>
          <ContactTitle>{props.shortName}</ContactTitle>
          <ContactItemDesc>{props.address}</ContactItemDesc>
          <Spacer height={15} backgroundColor={props.backgroundColor} />
          <Button
            to="https://www.linkedin.com/company/eleven-health"
            text="LinkedIn"
          />
          <Spacer height={15} backgroundColor={props.backgroundColor} />
          <ContactItemLink href={`mailto:${props.email}`}>
            {props.email}
          </ContactItemLink>
        </ContactContent>
        <ContactImageWrapper
          className="bgImage"
          style={{
            backgroundImage: backgroundImageString(props.photo),
          }}
        />
      </ContactItemContainer>
    </>
  );
};

export default ContactItem;
