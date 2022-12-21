import setBodyColor from "../../utils/setBodyColor";
import Callout from "../../components/Callout/callOut";
import { COLOR_BASE } from "../../styles/Constants";
import OrgsCallout from "../../components/OrgsCallout/orgsCallOut";

import { dataHome } from "./dataHome";
// import BannerAnimation from "components/BannerAnimations/test";
import BannerCompress from "components/BannerCompress/Wrapper/bannerCompress";
import Button from "components/Button/button";
import Container from "components/Container/container";
// import AnimatedColumns from "components/BannerAnimations/animatedColumns";

// const pageVideo = 776443340;

const HomePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerCompress />
      <Container>
        <Button buttonTo="/practice_areas" buttonText="What we do" />
      </Container>
      <OrgsCallout />
    </>
  );
};

export default HomePage;
