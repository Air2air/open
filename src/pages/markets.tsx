import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import PageBanner from "../components/PageBanner/pageBanner";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_TEXT,
} from "../styles/Constants";

const pageTitle = "Our Markets";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Vyh-jcp/videoblocks-realistic-medical-animation-of-several-coronavirus-cells-covid-19-flying-in-the-air_s_zc2y7du__371df1132bebc61a702365a54ae84d5c__P360.mp4";

const MarketsPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageDescription="Our text about our Markets here. Our text about our Markets here. Our text about our Markets here. Our text about our Markets here. Our text about our Markets here. Our text about our Markets here. "
        pageVideo={pageVideo}
        overlayOpacity={0.8}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="Biotech"
        calloutText="Our description here about our Biotech service offerings and benefits.  Our description here about our Biotech service offerings and benefits.  "
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText="Biotech"
        buttonTo="/biotech"
        typing={false}
      />
      <Callout
        calloutTitle="Healthtech"
        calloutText="Our description here about our Healthtech service offerings and benefits.  Our description here about our Healthtech service offerings and benefits.  "
        backgroundColor={COLOR_BASE_1}
        textColor={COLOR_BASE_TEXT}
        buttonText="Healthtech"
        buttonTo="/healthtech"
        typing={false}
      />
      <Callout
        calloutTitle="Medtech"
        calloutText="Our description here about our Medtech service offerings and benefits.  Our description here about our Medtech service offerings and benefits.  "
        backgroundColor={COLOR_BASE_2}
        textColor={COLOR_BASE_TEXT}
        buttonText="Medtech"
        buttonTo="/medtech"
        typing={false}
      />
      <Callout
        calloutTitle="Pharmatech"
        calloutText="Our description here about our Pharmatech service offerings and benefits.  Our description here about our Pharmatech service offerings and benefits.  "
        backgroundColor={COLOR_BASE_3}
        textColor={COLOR_BASE_TEXT}
        buttonText="Pharmatech"
        buttonTo="/pharmatech"
        typing={false}
      />
    </>
  );
};

export default MarketsPage;
