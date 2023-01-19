
import { RowButton } from "components/RowButton/rowButton";
import TeamList from "components/Team/team";
import Heading from "components/Heading/heading";
import { BannerImage } from "components/Banner/Image/bannerImage";

const pageTitle="About Open";

const AboutPage = () => {
  return (
    <>
      <BannerImage
        pageImage="banner_1.webp"
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/aboutHeading.json" />
      <RowButton currentPage={pageTitle} buttonTo="/contact" buttonText="Contact"/>
      {/* <Map title="Open Worldwide" backgroundColor={2} /> */}
      <TeamList jsonFile="/data/teamContent.json" />
      <RowButton currentPage={pageTitle} buttonTo="/contact" buttonText="Contact"/>
    </>
  );
};

export default AboutPage;
