import setBodyColor from '../utils/setBodyColor'
import Callout from "./../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { BANNER_HEIGHT_STANDARD_PX, COLOR_BASE, COLOR_BASE_1, COLOR_BASE_2, COLOR_BASE_TEXT } from "../styles/Constants";


const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/D8qa-2E/videoblocks-animation-particles-background47_sn-pqybzmo__491d7c8234d33aa73cf2dec16e4d381d__P360.mp4";

const ApproachPage = () => {
  setBodyColor({color: COLOR_BASE})
  return (
    <>
      <BannerVideo
        pageTitle="How we work together"
        pageDescription="With over 100 years of combined real-world experience, Eleven leverages a large multi-disciplinary team of industry-leading specialists to deliver across your healthcare AI needs."
        pageVideo={pageVideo}
        overlayOpacity={0.4}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="1. Kickoff Meeting"
        calloutText="Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text "
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
        typing={false}
      />
      <Callout
        calloutTitle="2. Research for Proposal"
        calloutText="Research for Proposal Text Research for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal Text"
        backgroundColor={COLOR_BASE_1}
        buttonText=""
        textColor={COLOR_BASE_TEXT}
        buttonTo=""
        typing={false}
      />
      <Callout
        calloutTitle="3. Team and Scope Recommendations "
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

export default ApproachPage;
