
import Map from "components/Map/map";
import { RowButton } from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import TeamList from "components/Team/team";
import Heading from "components/Heading/heading";
import { BannerImage } from "components/Banner/Image/bannerImage";

const AboutPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_3.webp"
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile="/data/aboutHeading.json" />
      <Map title="Open Worldwide" backgroundColor={2} />
      <TeamList jsonFile="/data/teamContent.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/contact" buttonText="Contact" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default AboutPage;
