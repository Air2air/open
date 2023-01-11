import Button from "components/Button/button";
import Container from "components/Container/container";
import Spacer from "components/Spacer/spacer";
import {
  ContactItemWrapper,
  ContactContent,
  ContactTitle,
  ContactItemDesc,
  ContactItemLink,
  ContactImageWrapper,
} from "./contactComponents";

const ContactItem = (props, index) => {

  const backgroundImageString = (photo) => "url(/images/content/" + photo + ")";

  return (
    <>
            <Container key={index} backgroundColor={props.backgroundColor}>
              <ContactItemWrapper>
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
              </ContactItemWrapper>
            </Container>
          </> 
  );
};

export default ContactItem



