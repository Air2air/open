import setBodyColor from "../utils/setBodyColor";
import BannerVideo from "../components/BannerVideo/bannerVideo";
// import Team from "../components/Team/team";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_TEXT,
} from "../styles/Constants";


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
      {/* <Team /> */}
    </>
  );
};

export default TeamPage;
