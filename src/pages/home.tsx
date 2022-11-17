import setBodyColor from "./../utils/setBodyColor";
import Callout from "./../components/Callout/callout";
import BannerVideo from "./../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "./../styles/Constants";
import OrgsCallout from "./../components/OrgsCallout/orgsCallout";

const pageVideo = 765122469;

const HomePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Drive Health AI portfolio success"
        pageDescription="Derisk your health AI investments with over 100 years of combined expertise"
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Callout
              id={1}
        title="We know what you need."
        text="The most <b>experienced</b> healthcare and clinical machine learning and business leaders from leading academic medical centers, venture capital, large technology companies, and successful digital health startups."
        backgroundColor={1}
        buttonText="What we do"
        buttonTo="/what_we_do"
      />
      <OrgsCallout />
    </>
  );
};

export default HomePage;
