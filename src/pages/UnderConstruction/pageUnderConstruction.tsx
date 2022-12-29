import { BannerText } from "components/BannerText/bannerText";
import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "constants/index";

const UnderConstructionPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776443340}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <BannerText text="underconstruction" />
    </>
  );
};

export default UnderConstructionPage;
