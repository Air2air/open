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
        pageDescription="Eleven accelerates breakthrough ventures in Biotech, Healthtech, Medtech, and Pharmatech. These sectors collectively comprise one of the largest markets in the world, and the health of these sectors controls the health of our society."
        pageVideo="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cq8l59W/videoblocks-abstract-dna-double-helix-with-depth-of-field-rotating_swl3slvvu__50289549fe2f14530b4e0bc181fec7ff__P360.mp4" 
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="Biotech"
        calloutText="Eleven estimates the Biotech sector to surpass $800 Billion in market value by 2025. Eleven supports Biotech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners. "
        calloutVideo="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cq8l59W/videoblocks-abstract-dna-double-helix-with-depth-of-field-rotating_swl3slvvu__50289549fe2f14530b4e0bc181fec7ff__P360.mp4"
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText="Biotech"
        buttonTo="/biotech"
      />
      <Callout
        calloutTitle="Healthtech"
        calloutText="Eleven estimates the Healthtech sector to surpass $500 Billion in market value by 2025. Eleven supports Healthtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners."
        backgroundColor={COLOR_BASE_1}
        textColor={COLOR_BASE_TEXT}
        buttonText="Healthtech"
        buttonTo="/healthtech"
      />
      <Callout
        calloutTitle="Medtech"
        calloutText="Eleven estimates the Medtech sector to surpass $600 Billion in market value by 2025. Eleven supports Medtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners. "
        backgroundColor={COLOR_BASE_2}
        textColor={COLOR_BASE_TEXT}
        buttonText="Medtech"
        buttonTo="/medtech"
      />
      <Callout
        calloutTitle="Pharmatech"
        calloutText="Eleven estimates the Pharmatech sector to surpass $1.3 Trillion in market value by 2025. Eleven supports Pharmatech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners. Our description here about our Pharmatech service offerings and benefits.  "
        backgroundColor={COLOR_BASE_3}
        textColor={COLOR_BASE_TEXT}
        buttonText="Pharmatech"
        buttonTo="/pharmatech"
      />
    </>
  );
};

export default MarketsPage;
