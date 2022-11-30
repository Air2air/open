import setBodyColor from "../../utils/setBodyColor";
import Callout from "../../components/Callout/callOut";
import BannerVideo from "../../components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "../../styles/Constants";
import OrgsCallout from "../../components/OrgsCallout/orgsCallOut";
import { dataHome } from "./dataHome";

const pageVideo = 776443340;

const HomePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        title="Get your Health AI venture to liquidity"
        text="Use the best people and practices to build your AI venture."
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
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
