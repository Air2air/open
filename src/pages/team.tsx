
import CalloutText from "../components/CalloutText/calloutText";
import PageBanner from "../components/PageBanner/pageBanner";
import Team from "../components/Team/team";
import { COLOR_RED, COLOR_RED_1 } from "../styles/Constants";

const pageTitle = "Elevens Team";
const pageSubTitle =
  "We're a team of seasoned cyber entrepreneurs, operators and investors offering first-hand experience, global perspective and rare connections for transformative cybersecurity companies.";
const pageVideo =
"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rsUQQw39cl52esufb/videoblocks-abstract-dna-pack-2021-09-08-19-33-23-utc-3_sfgtv1cpc__a58044aee90f7390d9e398a567ab69e8__P360.mp4";

const calloutTitle = "Text Callout";
const calloutText =
  "This is the Text Callout Text. This is the Text Callout Text. This is the Text Callout Text. This is the Text Callout Text. This is the Text Callout Text. ";

const TeamPage = () => {
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageSubTitle={pageSubTitle}
        pageVideo={pageVideo}
        overlayOpacity={0.8}
        overlayColor={COLOR_RED}
        typing={true}
      />
      <CalloutText
        calloutTitle={calloutTitle}
        calloutText={calloutText}
        backgroundColor={COLOR_RED_1}
        buttonText = "Callout Button Text"
        buttonTo = "/teams"
        typing={true}
      />
      <Team />

    </>
  );
};

export default TeamPage;

