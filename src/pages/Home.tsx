import CalloutList from "components/Callout/calloutList";

const HomePage = () => {
  return (
    <>
      <CalloutList jsonFile="/data/homeContent.json" />
    </>
  );
};

export default HomePage;
