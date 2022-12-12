import Callout from "components/Callout/callOut";
import { dataPracticeAreas } from "./dataPracticeAreas";
import BannerChart from "components/BannerChart/bannerChart";
import { ICalloutProps } from "interfaces/callouts";

const PracticeAreasPage = () => {
  return (
    <>
      <BannerChart
        data={dataPracticeAreas}
        color="#ffffff"
        label=""
        text="Eleven juggles the talent and resources for each practice area to optimize the whole venture's outcome. We call this process <b>''fractional C{x}AIOs''</b>."
        randomHeight={true}
        backgroundColor={2}
      />

      {dataPracticeAreas.map((props: ICalloutProps) => (
        <Callout {...props} />
      ))}
    </>
  );
};

export default PracticeAreasPage;
