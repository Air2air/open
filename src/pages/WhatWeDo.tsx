import { COLOR_BASE } from "styles/Constants";
import RowButton from "components/Button/rowButton";
import { BannerVideo } from "components/Banner/bannerVideo";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import WhatWeDoChart from "components/Chart/WhatWeDo/chartWhatWeDo";
import Heading from "components/Heading/heading";

const WhatWeDoPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776449715}
        overlayOpacity={0.7}
        overlayColor={COLOR_BASE}
      />
      <Heading jsonFile="/data/whatwedoHeading.json" />
      <WhatWeDoChart jsonFile="/data/whatwedoChart.json" />
      <RowButton
        buttonTo="/casestudies"
        buttonText="Case Studies"
        backgroundColor={3}
      />
      <Spacer height={40} backgroundColor={3} />
      <CalloutList jsonFile="/data/whatwedoContent.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton
        buttonTo="/casestudies"
        buttonText="Case Studies"
        backgroundColor={2}
      />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default WhatWeDoPage;
