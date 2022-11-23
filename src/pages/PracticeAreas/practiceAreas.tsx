import Callout from "components/Callout/callOut";
import { dataPracticeAreas } from "./dataPracticeAreas";
import BannerChartRandom from "components/BannerChartRandom/bannerChartRandom";
import { ICalloutProps } from "api/interfaces";

const PracticeAreasPage = () => {
  return (
    <>
      <BannerChartRandom
        title="What We Do"
        text="Eleven juggles the talent and resources for each practice area to optimize the whole venture's outcome. We call this process ''fractional CXAIOs''."
        color="#FFFFFF"
        backgroundColor={2}
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
