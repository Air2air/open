import Callout from "components/Callout/callOut";
import { dataPracticeAreas } from "./dataPracticeAreas";
import BannerAnimation from "components/BannerAnimation/BarChart/bannerAnimation";
import { ICalloutProps } from "api/interfaces";

const PracticeAreasPage = () => {
  return (
    <>
      <BannerAnimation
        title="We know how to juggle."
        text="Eleven knows how to juggle the talent and resources needed for each practice area to optimize the outcome for the whole venture. We call this process fractional CXOs."
      />
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
          buttonColor={props.buttonColor}
        />
      ))}
    </>
  );
};

export default PracticeAreasPage;
