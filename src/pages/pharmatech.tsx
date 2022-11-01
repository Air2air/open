import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import {

  COLOR_BASE,
  COLOR_BASE_TEXT,
} from "../styles/Constants";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/YqGSkmb/videoblocks-051_bkqzf7sec__ef7f4ded1f549dccc9f364428adbee1e__P360.mp4";

const PharmaTechPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="PharmaTech Market"
        pageDescription="Elevens brings proven expertise in AI relating to drug discovery, virtual clinical trials and digital twins, patient engagement and medication adherence, and more."
        pageVideo={pageVideo}
        overlayOpacity={0.6}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
      />
      <Callout
        calloutTitle="What we do in PharmaTech"
        calloutText="<p>Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below. Here's everything we do in PharmaTech. There may be other sections below.</p><p>Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below. Here's everything we do in PharmaTech. There may be other sections below.</p>"
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default PharmaTechPage;
