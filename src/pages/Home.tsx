import CallOutList from "components/CallOut/callOutList";

const HomePage = () => {
  return (
    <>
      <CallOutList jsonFile="/data/homeContent.json" />
    </>
  );
};

export default HomePage;
