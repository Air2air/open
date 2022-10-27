import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_TEXT,
} from "../styles/Constants";


const MarketsPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Our Markets"
        pageDescription="Our text about our Markets here. Our text about our Markets here. Our text about our Markets here. Our text about our Markets here. Our text about our Markets here. Our text about our Markets here."
        pageVideo="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cq8l59W/videoblocks-abstract-dna-double-helix-with-depth-of-field-rotating_swl3slvvu__50289549fe2f14530b4e0bc181fec7ff__P360.mp4" 
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="Biotech"
        calloutText="Our description here about our Biotech service offerings and benefits.  Our description here about our Biotech service offerings and benefits."
        calloutVideo="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cq8l59W/videoblocks-abstract-dna-double-helix-with-depth-of-field-rotating_swl3slvvu__50289549fe2f14530b4e0bc181fec7ff__P360.mp4"
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText="Biotech"
        buttonTo="/biotech"
      />
      <Callout
        calloutTitle="Healthtech"
        calloutText="Our description here about our Healthtech service offerings and benefits.  Our description here about our Healthtech service offerings and benefits.  "
        backgroundColor={COLOR_BASE_1}
        textColor={COLOR_BASE_TEXT}
        buttonText="Healthtech"
        buttonTo="/healthtech"
      />
      <Callout
        calloutTitle="Medtech"
        calloutText="Our description here about our Medtech service offerings and benefits.  Our description here about our Medtech service offerings and benefits.  "
        backgroundColor={COLOR_BASE_2}
        textColor={COLOR_BASE_TEXT}
        buttonText="Medtech"
        buttonTo="/medtech"
      />
      <Callout
        calloutTitle="Pharmatech"
        calloutText="Our description here about our Pharmatech service offerings and benefits.  Our description here about our Pharmatech service offerings and benefits.  "
        backgroundColor={COLOR_BASE_3}
        textColor={COLOR_BASE_TEXT}
        buttonText="Pharmatech"
        buttonTo="/pharmatech"
      />
    </>
  );
};

export default MarketsPage;
