import setBodyColor from '../utils/setBodyColor'
import Callout from "./../components/Callout/callOut";
import PageBanner from "../components/PageBanner/pageBanner";
import { COLOR_BASE, COLOR_BASE_1, COLOR_BASE_2, COLOR_BASE_TEXT } from "../styles/Constants";

const pageTitle = "Our Vision";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/D8qa-2E/videoblocks-animation-particles-background47_sn-pqybzmo__491d7c8234d33aa73cf2dec16e4d381d__P360.mp4";

const VisionPage = () => {
  setBodyColor({color: COLOR_BASE})
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageDescription="Our text here about our vision and values, and how they contribute to your success. Our text here about our vision and values, and how they contribute to your success."
        pageVideo={pageVideo}
        overlayOpacity={0.8}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
      />
      <Callout
        calloutTitle="Kickoff Meeting"
        calloutText="Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text "
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
        typing={false}
      />
      <Callout
        calloutTitle="Research for Proposal"
        calloutText="Research for Proposal Text Research for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal Text"
        backgroundColor={COLOR_BASE_1}
        buttonText=""
        textColor={COLOR_BASE_TEXT}
        buttonTo=""
        typing={false}
      />
      <Callout
        calloutTitle="Team and Scope Recommendations "
        calloutText="Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text"
        backgroundColor={COLOR_BASE_2}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
        typing={false}
      />
    </>
  );
};

export default VisionPage;
