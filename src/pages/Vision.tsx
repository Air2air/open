import CalloutList from "components/Callout/callOutList";


const HomePage = () => {
  return (
    <>
      <CalloutList jsonFile="/data/visionContent.json" />
    </>
  );
};

export default HomePage;
