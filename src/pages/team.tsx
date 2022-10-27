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
        pageDescription="If you know your industry, then you already know the Elevens."
        pageVideo={pageVideo}
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle=""
        calloutText="<p>Eleven was created when three fold eleven of the foremost AI and medical minds on the planet came together to accelerate breakthrough ventures in health-tech, med-tech, bio-tech, and pharma-tech. These experts are the leaders in AI technologies and business in medicine, healthcare, bioscience, and pharmaceutical science, and all share a mission to deliver the most fundamental advancements in the Modern Age.</p>
        <p>
        As individuals these “Elevens” have mastered the premier institutions of learning and are each accomplished in their fields, and together the “Eleven” is the world’s superior resource in the category. The landmark social good Elevens are doing to improve industry's chances for success are admirable, and while their ranks will grow and transform they will always remain the very best.</p>"
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default TeamPage;
