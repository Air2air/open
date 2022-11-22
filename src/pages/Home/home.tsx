import setBodyColor from "../../utils/setBodyColor";
import Callout from "../../components/Callout/callOut";
import BannerVideo from "../../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "../../styles/Constants";
import OrgsCallout from "../../components/OrgsCallout/orgsCallOut";
import { dataHome } from "./dataHome";

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
        buttonTo="/practice_areas"
      />
      <Callout
        id={2}
        title="Pre-seed studio / hospital spin out company with early novel AI model and technical lead"
        text="Elevens provided a fractional CXAIO that led product management discovery and MVP design, transitioning to full time PM hire, and alidated business model with payors and..."
        backgroundColor={2}
        buttonText="Case Studies"
        buttonTo="/casestudies"
      />
      <Callout
        title="Product/Market fit"
        text="Eleven understands your healthcare customer - from payers to providers to insurers, from academia to clinical practice, across bio to med to health to pharma. We'll enable you with:
        <ul>
        <li>Segment landscape, needs, and priorities to drive adoptio.</li>
        <li> Go-to-market, product positioning, price point for clinical machine learning and digital health solutions. </li>
        <li>Support for early adoption academic initiatives and activities including grants, publications, and collaborations.</li>
        </li>
        <li>Deep technical and clinical support for broader consumer health sector landscape (e.g., patient engagement, wearables, digital health and wellness).</li></ul>"
        backgroundColor={1}
        buttonText=""
        buttonTo=""
      />
      <Callout
        title="Growth and Acquisitions"
        text="
        From Seed to IPO Eleven shepherds your <b>portfolio companies</b> through the challenging health vertical.  
        <ul>
        <li>Strategic investments and structuring corporate vehicles (e.g., corporate venture capital, or CVC).</li>
        <li>Growth guidance including market segment, therapeutic area or disease category from competitive, partnering or investment perspectives.</li>  <li>Multidisciplinary fundraising, positioning vision, strategy and business model for digital health and digital medicine.</li>
        <li>M &amp; A commercial due diligence including market assessment, evaluation of the competitive landscape, and analysis of the target's value proposition and post-acquisition growth strategy.</li>
        </ul>
       "
        backgroundColor={2}
        buttonText="Markets"
        buttonTo="/markets"
      />
      {dataHome.map((props) => (
        <Callout
          key={props.id}
          id={props.id}
          title={props.title}
          text={props.text}
          backgroundColor={props.backgroundColor}
          buttonText={props.buttonText}
          buttonTo={props.buttonTo}
        />
      ))}

      <OrgsCallout />
    </>
  );
};

export default HomePage;
