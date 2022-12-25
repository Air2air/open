import BannerVideo from "components/BannerVideo/videoBanner";
import { COLOR_BASE } from "constants/index";

const UnderConstructionPage = () => {
  return (
    <>
      <BannerVideo
        text="underconstruction"
        pageVideo={776443340}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
    </>
  );
};

export default UnderConstructionPage;
