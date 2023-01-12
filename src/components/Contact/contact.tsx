import { CalloutSkeleton } from "components/Callout/calloutComponents";
import { FetchData } from "fetch/fetch";
import ContactItem from "./contactItem";

const ContactList = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return <CalloutSkeleton />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return data && data.length > 0 ? (
    data.map((props, index) => {
      return <ContactItem key={index} {...props} />;
    })
  ) : (
    <div style={{ color: "white" }}>Data Fetch error in List component</div>
  );
};

export default ContactList;
