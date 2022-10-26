import setBodyColor from "../utils/setBodyColor";
import Callout from "./../components/Callout/callOut";
import BannerImage from "../components/BannerImage/bannerImage";
import {
  BANNER_HEIGHT_STANDARD_PX,
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_TEXT,
} from "../styles/Constants";

const pageImage = "dartmouth.jpeg";

const VisionPage = () => {
  setBodyColor({ color: COLOR_BASE });

  return (
    <>
      <BannerImage
        pageTitle="Our Vision"
        pageDescription="In 1956, 11 experts from multiple scientific disciplines traveled around the world to meet at Dartmouth College.  Their purpose?"
        pageImage={pageImage}
        overlayOpacity={0.7}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
      <Callout
        calloutTitle="Machine Intelligence"
        calloutText="<p>Over several days they combined their collective experience to build the foundational principles for what we know today as Artificial Intelligence.</p><p>Eleven was designed with this historical perspective in mind, founded by a multidisciplinary team of physicians, scientists, and engineers who combine their experience to define a path forward for today's leading companies building the future of digital health and clinical machine learning.</p>"
        backgroundColor={COLOR_BASE_1}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
        typing={false}
      />
    </>
  );
};

export default VisionPage;
