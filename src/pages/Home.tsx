import RowButton from "components/RowButton/rowButton";
import Heading from "components/Heading/heading";
import CalloutList from "components/Callout/callOutList";
import Callout from "components/Callout/callOut";

const pageTitle = "The Open Home";

const HomePage = () => {
  return (
    <>
      <Heading jsonFile="/data/charterHeading.json" />
      <CalloutList jsonFile="/data/homeContent.json" />
      <RowButton currentPage={pageTitle} buttonTo="/about" buttonText="About" />
    </>
  );
};

export default HomePage;
