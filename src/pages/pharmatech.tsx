import setBodyColor from "./../utils/setBodyColor";
import Callout from "./../components/Callout/callout";
import BannerVideo from "./../components/BannerVideo/bannerVideo";
import {

  COLOR_BASE,
} from "./../styles/Constants";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/YqGSkmb/videoblocks-051_bkqzf7sec__ef7f4ded1f549dccc9f364428adbee1e__P360.mp4";

const PharmaTechPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="PharmaTech Market"
        pageDescription="Elevens brings proven expertise in AI relating to drug discovery, virtual clinical trials and digital twins, patient engagement and medication adherence, and more"
        pageVideo={pageVideo}
        overlayOpacity={0.6}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Callout
      id={1}
        title="What we do in PharmaTech"
        text="<p>Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below. Here's everything we do in PharmaTech. There may be other sections below.</p><p>Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below.  Here's everything we do in PharmaTech. There may be other sections below. Here's everything we do in PharmaTech. There may be other sections below.</p>"
        backgroundColor={COLOR_BASE}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default PharmaTechPage;
