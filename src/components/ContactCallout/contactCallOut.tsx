
import { ContactItem } from "./contactItem";
import { dataContact } from "./dataContact";


const ContactCallout = () => {
  return (
    <>
      {dataContact.map((props) => (
        <ContactItem {...props} key={props.id} />
      ))}
    </>
  );
};

export default ContactCallout;


