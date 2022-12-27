
import BannerVideo from "components/BannerVideo/videoBanner";
import { COLOR_BASE} from "constants/index";
import Advisors from "components/Advisors/advisors";
import Map from "components/Map/map";

import Spacer from "components/Spacer/spacer";
import { RowButton } from "components/Button/rowButton";

const AboutPage = () => {
  return (
    <>
      <BannerVideo
        text="about"
        pageVideo={776449715}
        overlayOpacity={0.7}
        overlayColor={COLOR_BASE}
      />
      <Spacer height={60} backgroundColor={1} />
      <Map title="Elevens Worldwide" backgroundColor={1} />
      <Advisors title="Advisory Board" backgroundColor={3} />
      <Spacer height={60} backgroundColor={2} />
      <RowButton buttonTo="/contact" buttonText="Contact" backgroundColor={4} />
      <Spacer height={60} backgroundColor={2} />
    </>
  );
};

export default AboutPage;
