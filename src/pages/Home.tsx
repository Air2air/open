import OrgsCallout from "components/OrgsCallout/orgsCallOut";
import SectionList from "components/Section/sectionList";

const HomePage = () => {
  return (
    <>
      <SectionList jsonFile="/data/homeContent.json" />
      <OrgsCallout jsonFile="/data/orgsContent.json" />
    </>
  );
};

export default HomePage;
