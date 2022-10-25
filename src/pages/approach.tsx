import setBodyColor from '../utils/setBodyColor'
import Callout from "./../components/Callout/callOut";
import PageBanner from "../components/PageBanner/pageBanner";
import { COLOR_BASE, COLOR_BASE_1, COLOR_BASE_2, COLOR_BASE_TEXT } from "../styles/Constants";

const pageTitle = "Our Approach";
const pageSubTitle =
  "Cybersecurity is fundamental to maintaining our way of life. It is essential for global commerce. The lights simply don't turn on without it. At Elevens, we empower founders to create cybersecurity technologies that make our world more secure.";
const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Vyh-jcp/videoblocks-realistic-medical-animation-of-several-coronavirus-cells-covid-19-flying-in-the-air_s_zc2y7du__371df1132bebc61a702365a54ae84d5c__P360.mp4";

const ApproachPage = () => {
  setBodyColor({color: COLOR_BASE})
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageSubTitle={pageSubTitle}
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

export default ApproachPage;
