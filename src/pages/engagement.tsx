import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { COLOR_BASE, COLOR_BASE_1 } from "../styles/Constants";

const pageVideo = 769134952;

const EngagementPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Helping your venture"
        pageDescription="Evaluate, scope, deliver and measure.  Our healthcare AI workflow is proven to get you there."
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Callout
        calloutTitle="Doodle"
        calloutText="The most <b>experienced</b> healthcare and clinical machine learning and business leaders from leading academic medical centers, venture capital, large technology companies, and successful digital health startups."
        backgroundColor={COLOR_BASE_1}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default EngagementPage;
