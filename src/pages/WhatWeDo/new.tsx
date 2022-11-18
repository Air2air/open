import Callout from "../../components/Callout/callOut";
import { dataWhatWeDo } from "./dataWhatWeDo";
import BannerAnimation from "components/BannerAnimation/bannerAnimation";

// const pageVideo = 766731362;

const WhatWeDoNewPage = () => {
  return (
    <>
      <BannerAnimation />
      {dataWhatWeDo.map((props) => (
        <Callout
          id={props.id}
          title={props.title}
          text={props.text}
          backgroundColor={props.backgroundColor}
          buttonText={props.buttonText}
          buttonTo={props.buttonTo}
        />
      ))}
    </>
  );
};

export default WhatWeDoNewPage;
