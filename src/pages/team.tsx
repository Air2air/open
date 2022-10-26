import setBodyColor from "../utils/setBodyColor";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import Team from "../components/Team/team";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_TEXT,
} from "../styles/Constants";


const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rsUQQw39cl52esufb/videoblocks-abstract-dna-pack-2021-09-08-19-33-23-utc-3_sfgtv1cpc__a58044aee90f7390d9e398a567ab69e8__P360.mp4";

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
      <Team />
    </>
  );
};

export default TeamPage;
