import setBodyColor from "utils/setBodyColor";
import BannerVideo from "components/VideoBanner/videoBanner";
import { COLOR_BASE, COLOR_BASE_1, COLOR_WHITE } from "constants/index";
import Advisors from "components/Advisors/advisors";
import Map from "components/Map/map";

import Spacer from "components/Spacer/spacer";
import { RowButton } from "components/Button/rowButton";


const AboutPage = () => {
  setBodyColor({ color: COLOR_BASE_1 });
  return (
    <>
      <BannerVideo
        title="About Elevens"
        text="If you know healthcare AI, then you already know some Elevens"
        pageVideo={776449715}
        color={COLOR_WHITE}
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        typing
      />
      <Spacer height={60} backgroundColor={1} />
      <Map title="Elevens Worldwide" backgroundColor={1} />
      <Advisors title="Advisory Board" backgroundColor={3} />
      <Spacer height={60} backgroundColor={2} />
      <RowButton
        buttonTo="/contact"
        buttonText="Contact"
        backgroundColor={4}
      />
      <Spacer height={60} backgroundColor={2} />
    </>
  );
};

export default AboutPage;
