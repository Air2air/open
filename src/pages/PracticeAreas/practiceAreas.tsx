import Callout from "components/Callout/callOut";
import { dataPracticeAreas } from "./dataPracticeAreas";
import BannerAnimation from "components/BannerChartRandom/bannerChartRandom";
import { ICalloutProps } from "api/interfaces";

const PracticeAreasPage = () => {
  return (
    <>
      <BannerAnimation
        label="What We Do"
        text="Eleven juggles the talent and resources for each practice area to optimize the whole venture's outcome. We call this process fractional CXOs."
        color="#FFFFFF"
        backgroundColor={2}
      />
      {dataPracticeAreas.map((props: ICalloutProps) => (
        <Callout
          key={props.id}
          id={props.id}
          label={props.label}
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
