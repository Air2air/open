import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callout";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "../styles/Constants";

const pageTitle = "HealthTech Market";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BKaAXTX/hospital-ekg-traces-1733_xkdnkn6b__702aa6225048bedb5953f32d585f47ce__P360.mp4";

const HealthTechPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle={pageTitle}
        pageDescription="Our tagline here about our Healthtech market service offering and benefits.  Our tagline here about our Healthtech market service offering and benefits. Our tagline here about our Healthtech market service offering and benefits"
        pageVideo={pageVideo}
        overlayOpacity={0.3}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Callout
        title="What we do in HealthTech"
        text="<p>Here's everything we do in HealthTech. There may be other sections below.  Here's everything we do in HealthTech. There may be other sections below.  Here's everything we do in HealthTech. There may be other sections below.  Here's everything we do in HealthTech. There may be other sections below.  Here's everything we do in HealthTech. There may be other sections below.  Here's everything we do in HealthTech. There may be other sections below. Here's everything we do in HealthTech. There may be other sections below.</p><p>Here's everything we do in HealthTech. There may be other sections below.  Here's everything we do in HealthTech. There may be other sections below.  Here's everything we do in HealthTech. There may be other sections below.  Here's everything we do in HealthTech. There may be other sections below.  Here's everything we do in HealthTech. There may be other sections below.  Here's everything we do in HealthTech. There may be other sections below. Here's everything we do in HealthTech. There may be other sections below.</p>"
        backgroundColor={COLOR_BASE}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default HealthTechPage;
