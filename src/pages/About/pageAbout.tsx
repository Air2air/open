import BannerVideo from "components/Banner/bannerVideo";
import Advisors from "components/Advisors/advisors";
import Map from "components/Map/map";
import { RowButton } from "components/Button/rowButton";
import BannerText from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";

const AboutPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={776449715}
        overlayOpacity={0.7}  
      />
      <BannerText text="about" />
      <Map title="Elevens Worldwide" backgroundColor={1} />
      <Advisors title="Advisory Board" backgroundColor={3} />
      <Spacer height={40} backgroundColor={2}/>
      <RowButton buttonTo="/contact" buttonText="Contact" />
    </>
  );
};

export default AboutPage;
