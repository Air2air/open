import Callout from "components/Callout/callOut";
import { dataPracticeAreas } from "./dataPracticeAreas";
import BannerAnimation from "components/BannerAnimation/BarChart/bannerAnimation";
import { ICalloutProps } from "api/interfaces";

const PracticeAreasPage = () => {
  return (
    <>
      <BannerAnimation />
      {dataPracticeAreas.map((props: ICalloutProps) => (
        <Callout
          key={props.id}
          id={props.id}
          title={props.title}
          text={props.text}
          color={props.color}
          backgroundColor={props.backgroundColor}
          buttonText={props.buttonText}
          buttonTo={props.buttonTo}
        />
      ))}
    </>
  );
};

export default PracticeAreasPage;
