import OrgsCallout from "components/OrgsCallout/orgsCallOut";
import Section from "components/Section/section";

const HomePage = () => {
  return (
    <>
      <Section jsonFile="/data/homeContent.json" />
      <OrgsCallout jsonFile="/data/orgsContent.json" />
    </>
  );
};

export default HomePage;
