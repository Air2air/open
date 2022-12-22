import Callout from "components/Callout/callOut";
import { dataPracticeAreas } from "./dataPracticeAreas";
import BannerChart from "components/BannerMarkets/bannerMarkets";
import { ICalloutProps } from "interfaces/callouts";

const PracticeAreasPage = () => {
  return (
    <>
      <BannerChart
        data={dataPracticeAreas}
        color="#ffffff"
        label=""
        text="Elevens juggles the talent and resources for each practice area to optimize the venture's outcome. We call this process ''fractional C{x}AIOs''."
        randomHeight={true}
        backgroundColor={2}
      />

      {dataPracticeAreas.map((props: ICalloutProps) => (
        <Callout {...props} key={props.id} />
      ))}
    </>
  );
};

export default PracticeAreasPage;
