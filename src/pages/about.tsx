import setBodyColor from "utils/setBodyColor";
import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE, COLOR_BASE_1, COLOR_WHITE } from "./../styles/Constants";
import Advisors from "components/Advisors/advisors";
import Map from "components/Map/map";
import Button from "components/Button/button";
import Container from "components/Container/container";

const pageVideo = 776451115;

const AboutPage = () => {
  setBodyColor({ color: COLOR_BASE_1 });
  return (
    <>
      <BannerVideo
        title="About Eleven"
        text="If you know healthcare AI, then you already know some Elevens"
        pageVideo={pageVideo}
        color={COLOR_WHITE}
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        typing
      />
      <Map mapTitle="ELEVENS WORLDWIDE" backgroundColor={2} />
      <Advisors title="ADVISORY BOARD" backgroundColor={3} />
      <Container>
        <Button buttonTo="/contact" buttonText="Contact" />
      </Container>
    </>
  );
};

export default AboutPage;
