import setBodyColor from "../utils/setBodyColor";
import BannerVideo from "../components/BannerVideo/bannerVideo";
// import Team from "../components/Team/team";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_TEXT,
} from "../styles/Constants";
import { Callout } from "../components/Callout/callOut";


const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/CWsBQHy/videoblocks-3d-model-robot-dancing-transparent-background_rgxqysjas__6ba9cf78254a616ad7f62a0d83a45513__P720.mp4";

const TeamPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Elevens"
        pageDescription="Our team, accomplishments, credentials and values.  "
        pageVideo={pageVideo}
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle=""
        calloutText="Eleven was created when several of the foremost AI and medical minds on the planet came together to accelerate breakthrough ventures in health-tech, med-tech, bio-tech, and pharma-tech. These experts are leaders in AI technologies and business in medicine, healthcare, pharmaceutical sciences, and biosciences."
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default TeamPage;
