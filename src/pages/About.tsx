
import Map from "components/Map/map";
import { RowButton } from "components/Button/rowButton";
import TeamList from "components/Team/team";
import Heading from "components/Heading/heading";
import { BannerImage } from "components/Banner/Image/bannerImage";

const AboutPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_5.webp"
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile="/data/aboutHeading.json" />
      <RowButton buttonTo="/contact" buttonText="Contact"/>
      <Map title="Open Worldwide" backgroundColor={2} />
      <TeamList jsonFile="/data/teamContent.json" />
      <RowButton buttonTo="/contact" buttonText="Contact"/>
    </>
  );
};

export default AboutPage;
