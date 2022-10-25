import setBodyColor from '../utils/setBodyColor'
import Callout from "../components/Callout/callOut";
import PageBanner from "../components/PageBanner/pageBanner";
import Team from "../components/Team/team";
import { COLOR_BLUE, COLOR_BLUE_1, COLOR_BLUE_TEXT } from "../styles/Constants";

const pageTitle = "Elevens Team";
const pageSubTitle =
  "We're a team of seasoned cyber entrepreneurs, operators and investors offering first-hand experience, global perspective and rare connections for transformative cybersecurity companies.";
const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rsUQQw39cl52esufb/videoblocks-abstract-dna-pack-2021-09-08-19-33-23-utc-3_sfgtv1cpc__a58044aee90f7390d9e398a567ab69e8__P360.mp4";

const calloutTitle = "Text Callout";
const calloutText =
  "This is the Text Callout Text. This is the Text Callout Text. This is the Text Callout Text. This is the Text Callout Text. This is the Text Callout Text. ";

const TeamPage = () => {
  setBodyColor({color: COLOR_BLUE})
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageSubTitle={pageSubTitle}
        pageVideo={pageVideo}
        overlayOpacity={0.75}
        overlayColor={COLOR_BLUE}
        textColor={COLOR_BLUE_TEXT}
        typing={true}
      />
      <Callout
        calloutTitle={calloutTitle}
        calloutText={calloutText}
        backgroundColor={COLOR_BLUE_1}
        textColor={COLOR_BLUE_TEXT}
        buttonText="Callout Button Text"
        buttonTo="/teams"
        typing={true}
      />
      <Team />
    </>
  );
};

export default TeamPage;
