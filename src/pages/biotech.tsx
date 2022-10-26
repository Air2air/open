import setBodyColor from"../utils/setBodyColor";
import Callout from"../components/Callout/callOut";
import PageBanner from"../components/PageBanner/pageBanner";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
  COLOR_BASE_6,
  COLOR_BASE_TEXT,
} from"../styles/Constants";

const pageTitle ="BioTech Market";
const pageDescription =
"Our tagline here about our Biotech market service offering and benefits.  Our tagline here about our Biotech market service offering and benefits. Our tagline here about our Biotech market service offering and benefits.";
const pageVideo =
"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Vyh-jcp/videoblocks-realistic-medical-animation-of-several-coronavirus-cells-covid-19-flying-in-the-air_s_zc2y7du__371df1132bebc61a702365a54ae84d5c__P360.mp4";

const BioTechPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageVideo={pageVideo}
        overlayOpacity={0.8}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="Pre-Seed Stage"
        calloutText="Text about the Pre-Seed Stage. Text about the Pre-Seed Stage. Text about the Pre-Seed Stage. Text about the Pre-Seed Stage. Text about the Pre-Seed Stage. Text about the Pre-Seed Stage. Text about the Pre-Seed Stage. Text about the Pre-Seed Stage. Text about the Pre-Seed Stage. Text about the Pre-Seed Stage."
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
        typing={false}
      />
      <Callout
        calloutTitle="Seed Stage"
        calloutText="
        Your company now has a degree of experience and can demonstrate potential to develop into a vibrant company. You now need a pitch deck to demonstrate to VCs that your idea is a viable investment opportunity. Most of the modest sums you raise in the seed stage are for specific activities like: 
          ▪	Market research 
          ▪	Business plan development 
          ▪	Setting up a management team  
          ▪	Product development"
        backgroundColor={COLOR_BASE_1}
        buttonText=""
        textColor={COLOR_BASE_TEXT}
        buttonTo=""
        typing={false}
      />
      <Callout
        calloutTitle="Series A Stage"
        calloutText="Series A typically is the first round of venture capital financing. At this stage, your company has usually completed its business plan and has a pitch deck emphasizing product-market fit. You are honing the product and establishing a customer base, ramping up marketing and advertising, and you can demonstrate consistent revenue flow."
        backgroundColor={COLOR_BASE_2}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
        typing={false}
      />
      <Callout
        calloutTitle="Series B Stage"
        calloutText="Your company is now ready to scale. This stage of venture capital supports actual product manufacturing, marketing and sales operations. To expand, you'll likely need a much larger capital investment than earlier ones. Series B funding differs from Series A. Whereas Series A investors will measure your potential, for Series B they want to see actual performance and evidence of a commercially viable product or service to support future fundraising. Performance metrics give investors confidence that you and your team can achieve success at a larger scale."
        backgroundColor={COLOR_BASE_3}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
        typing={false}
      />
      <Callout
        calloutTitle="Series C Stage"
        calloutText="When you reach the Series C funding stage, you're on a growth path. You've achieved success and incremental funding will help you build new products, reach new markets and even acquire other startups. It typically requires 2-3 years to reach this phase on a quick trajectory, and you're producing exponential growth and consistent profitability."
        backgroundColor={COLOR_BASE_4}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
        typing={false}
      />
      <Callout
        calloutTitle="Mezzanine"
        calloutText="The final stage of venture capital marks your transition to a liquidity event, either an exit via going public or M&amp;A. You've reached maturity and now need financing to support major events."
        backgroundColor={COLOR_BASE_5}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
        typing={false}
      />
      <Callout
        calloutTitle="Public Stage"
        calloutText="An IPO or initial public offering is the natural progression of funding beyond VCs. It's the process of taking your private company public by offering corporate shares on the open market. This can be a very effective way for a growing startup with proven potential or a long-established company to generate funds and reward earlier investors, including the founder and team."
        backgroundColor={COLOR_BASE_6}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
        typing={false}
      />
    </>
  );
};

export default BioTechPage;
