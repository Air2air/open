import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
  COLOR_BASE_6,
  COLOR_BASE_TEXT,
} from "../styles/Constants";
import TimeLine from "../components/TimeLine/timeLine";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cq8l59W/videoblocks-abstract-dna-double-helix-with-depth-of-field-rotating_bwvuhuvwu__e0e0c7137fc604d291ce0add7aa6df8c__P360.mp4";

const TimeLinePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      {/* <BannerVideo
        pageTitle="TimeLine Market"
        pageDescription="Biotechnology companies are increasingly taking the lead in new drug development, unlike Pharma companies who are pulling back from expensive basic research, increasingly becoming massive marketing vehicles for the biotech world."
        pageVideo={pageVideo}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      /> */}
      <TimeLine />
    </>
  );
};

export default TimeLinePage;
