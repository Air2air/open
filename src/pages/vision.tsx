import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerImage from "../components/BannerImage/bannerImage";
import {
  COLOR_BASE,
  COLOR_BASE_1,
} from "../styles/Constants";

const pageImage = "dartmouth.jpeg";

const VisionPage = () => {
  setBodyColor({ color: COLOR_BASE });

  return (
    <>
      <BannerImage
        pageTitle="Our Vision"
        pageDescription="Eleven is a multidisciplinary advisory of physicians, scientists, engineers, entrepreneurs and enterprisers who combine their experience to define a path forward for leading companies building the future of digital health and clinical machine learning"
        pageImage={pageImage}
        overlayOpacity={0.7}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Callout
        calloutTitle="The birth of machine intelligence"
        calloutText='<p>In 1956, 11 experts from multiple scientific disciplines traveled around the world to meet at Dartmouth College. Over several days the <b>Dartmouth Workshop</b> combined their collective experience to build the foundational principles for what we know today as Artificial Intelligence. The proposal states:</p>
        <blockquote><i>
        "...We propose that a 2-month, 10-man(sic) study of artificial intelligence be carried out during the summer of 1956 at Dartmouth College in Hanover, New Hampshire. The study is to proceed on the basis of the conjecture that every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it. An attempt will be made to find how to make machines use language, form abstractions and concepts, solve kinds of problems now reserved for humans, and improve themselves. We think that a significant advance can be made in one or more of these problems if a carefully selected group of scientists work on it together for a summer.</i>
        </blockquote>
        <p>The workshop is widely considered to be the founding event of artificial intelligence as a field.</p>
       </p>'
        backgroundColor={COLOR_BASE_1}
        buttonText="About Eleven"
        buttonTo="/about"
      />
    </>
  );
};

export default VisionPage;
