import Callout from "components/Callout/callOut";
import { dataPracticeAreas } from "./dataPracticeAreas";
import { ICalloutProps } from "interfaces/callouts";
import { COLOR_BASE } from "constants/index";
import RowButton from "components/Button/rowButton";
import { BannerVideo } from "components/BannerVideo/bannerVideo";
import ChartPracticeAreas from "components/Chart/PracticeAreas/chartPracticeAreas";

const PracticeAreasPage = () => {
  return (
    <>
      <BannerVideo
        text="practiceareas"
        pageVideo={776449715}
        overlayOpacity={0.7}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <ChartPracticeAreas
        columnCount={6}
        data={dataPracticeAreas}
        backgroundColor={3}
      />
      <RowButton buttonTo="/casestudies" buttonText="Case Studies" />
      {dataPracticeAreas.map((props: ICalloutProps) => (
        <Callout {...props} key={props.id} />
      ))}
    </>
  );
};

export default PracticeAreasPage;
