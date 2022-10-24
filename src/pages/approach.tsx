import CalloutText from "../components/CalloutText/calloutText";
import PageBanner from "../components/PageBanner/pageBanner";
import ScrollBox from "../components/ScrollBox/scrollBox";
import { COLOR_RED, COLOR_RED_1, COLOR_RED_2 } from "../styles/Constants";

const pageTitle = "Our Approach";
const pageSubTitle =
  "Cybersecurity is fundamental to maintaining our way of life. It is essential for global commerce. The lights simply don't turn on without it. At Ten Eleven, we empower founders to create cybersecurity technologies that make our world more secure.";
const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Vyh-jcp/videoblocks-realistic-medical-animation-of-several-coronavirus-cells-covid-19-flying-in-the-air_s_zc2y7du__371df1132bebc61a702365a54ae84d5c__P360.mp4";

const ApproachPage = () => {
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageSubTitle={pageSubTitle}
        pageVideo={pageVideo}
        overlayOpacity={0.9}
        overlayColor={COLOR_RED}
        typing={true}
      />
      <CalloutText
        calloutTitle="Kickoff Meeting"
        calloutText="Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text Kickoff Meeting Text "
        backgroundColor={COLOR_RED}
        buttonText=""
        buttonTo=""
        typing={true}
      />
      <CalloutText
        calloutTitle="Research for Proposal"
        calloutText="Research for Proposal Text Research for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal TextResearch for Proposal Text"
        backgroundColor={COLOR_RED_1}
        buttonText=""
        buttonTo=""
        typing={true}
      />
      <CalloutText
        calloutTitle="Team and Scope Recommendations "
        calloutText="Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text Team and Scope Recommendations Text"
        backgroundColor={COLOR_RED_2}
        buttonText=""
        buttonTo=""
        typing={true}
      />
      <ScrollBox />
    </>
  );
};

export default ApproachPage;
