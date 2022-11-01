import setBodyColor from"../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from"../components/BannerVideo/bannerVideo";
import {

  COLOR_BASE,
  COLOR_BASE_TEXT,
} from"../styles/Constants";


const pageVideo =
"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/NrM0QFs3gilniuv44/videoblocks-mri-scan-of-a-human-brain-in-motion-scanning-of-brain-magnetic-resonance-image-diagnostic-medical-tool_hss8usofo__99653a64ded0a267edaae5c772f44c83__P360.mp4";

const MedTechPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="MedTech Market"
        pageDescription="Medtech Startups often face years of losses and cash outflows as management tries to lead new products through clinical trials, through regulators and onto the market. We help you through."
        pageVideo={pageVideo}
        overlayOpacity={0.5}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
      />
       <Callout
        calloutTitle="What we do in MedTech"
        calloutText="<p>Here's everything we do in MedTech. There may be other sections below.  Here's everything we do in MedTech. There may be other sections below.  Here's everything we do in MedTech. There may be other sections below.  Here's everything we do in MedTech. There may be other sections below.  Here's everything we do in MedTech. There may be other sections below.  Here's everything we do in MedTech. There may be other sections below. Here's everything we do in MedTech. There may be other sections below.</p><p>Here's everything we do in MedTech. There may be other sections below.  Here's everything we do in MedTech. There may be other sections below.  Here's everything we do in MedTech. There may be other sections below.  Here's everything we do in MedTech. There may be other sections below.  Here's everything we do in MedTech. There may be other sections below.  Here's everything we do in MedTech. There may be other sections below. Here's everything we do in MedTech. There may be other sections below.</p>"
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default MedTechPage;
