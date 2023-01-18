import RowButton from "components/Button/rowButton";
import { BannerVideo } from "components/Banner/bannerVideo";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";

import Heading from "components/Heading/heading";

const GetInvolvedPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776449715}
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile="/data/getinvolvedHeading.json" />
      {/* <GetInvolvedChart jsonFile="/data/getinvolvedChart.json" /> */}
      <RowButton
        buttonTo="/policy"
        buttonText="Case Studies"
        backgroundColor={3}
      />
      <Spacer height={40} backgroundColor={3} />
      <CalloutList jsonFile="/data/getinvolvedContent.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton
        buttonTo="/policy"
        buttonText="Case Studies"
        backgroundColor={2}
      />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default GetInvolvedPage;
