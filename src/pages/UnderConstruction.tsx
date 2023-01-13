
import BannerVideo from "components/Banner/bannerVideo";
import { COLOR_BASE } from "styles/Constants";

const UnderConstructionPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776443340}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {/* <BannerText text="underconstruction" /> */}
    </>
  );
};

export default UnderConstructionPage;
