import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "../styles/Constants";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cq8l59W/videoblocks-abstract-dna-double-helix-with-depth-of-field-rotating_bwvuhuvwu__e0e0c7137fc604d291ce0add7aa6df8c__P360.mp4";

const BioTechPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="BioTech Market"
        pageDescription="Biotechnology companies are increasingly taking the lead in new drug development, unlike Pharma companies who are pulling back from expensive basic research, becoming massive marketing vehicles for the biotech world."
        pageVideo={pageVideo}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Callout
        calloutTitle="What we do in BioTech"
        calloutText="<p>Here's everything we do in BioTech. There may be other sections below.  Here's everything we do in BioTech. There may be other sections below.  Here's everything we do in BioTech. There may be other sections below.  Here's everything we do in BioTech. There may be other sections below.  Here's everything we do in BioTech. There may be other sections below.  Here's everything we do in BioTech. There may be other sections below. Here's everything we do in BioTech. There may be other sections below.</p><p>Here's everything we do in BioTech. There may be other sections below.  Here's everything we do in BioTech. There may be other sections below.  Here's everything we do in BioTech. There may be other sections below.  Here's everything we do in BioTech. There may be other sections below.  Here's everything we do in BioTech. There may be other sections below.  Here's everything we do in BioTech. There may be other sections below. Here's everything we do in BioTech. There may be other sections below.</p>"
        backgroundColor={COLOR_BASE}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default BioTechPage;
