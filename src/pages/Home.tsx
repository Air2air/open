import CalloutList from "components/Callout/callOutList";

const HomePage = () => {
  return (
    <>
      <CalloutList jsonFile="/data/homeContent.json" />
    </>
  );
};

export default HomePage;
