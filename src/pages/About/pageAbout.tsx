import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "constants/index";
import Advisors from "components/Advisors/advisors";
import Map from "components/Map/map";
import { RowButton } from "components/Button/rowButton";
import BannerText from "components/BannerText/bannerText";

const AboutPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776449715}
        overlayOpacity={0.7}
        overlayColor={COLOR_BASE}
      />
      <BannerText text="about" />
      <Map title="Elevens Worldwide" backgroundColor={1} />
      <Advisors title="Advisory Board" backgroundColor={3} />
      <RowButton buttonTo="/contact" buttonText="Contact" backgroundColor={4} />
    </>
  );
};

export default AboutPage;
