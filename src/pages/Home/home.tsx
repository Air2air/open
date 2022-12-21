import setBodyColor from "../../utils/setBodyColor";
import Callout from "../../components/Callout/callOut";
import { COLOR_BASE } from "../../styles/Constants";
import OrgsCallout from "../../components/OrgsCallout/orgsCallOut";

import { dataHome } from "./dataHome";
// import BannerAnimation from "components/BannerAnimations/test";
import BannerCompress from "components/BannerCompress/Wrapper/bannerCompress";
// import AnimatedColumns from "components/BannerAnimations/animatedColumns";

// const pageVideo = 776443340;

const HomePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerCompress />
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
