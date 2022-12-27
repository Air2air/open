import Callout from "components/Callout/callOut";
import { dataPracticeAreas } from "./dataPracticeAreas";
import { ICalloutProps } from "interfaces/callouts";
import Spacer from "components/Spacer/spacer";
import { COLOR_BASE } from "constants/index";
import RowButton from "components/Button/rowButton";
import { BannerVideo } from "components/BannerVideo/videoBanner";
import ChartPracticeAreas from "components/Chart/PracticeAreas/chartPracticeAreas";

const PracticeAreasPage = () => {
  return (
    <>
      <BannerVideo
        text="practiceareas"
        pageVideo={776449715}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Spacer height={60} />
      <ChartPracticeAreas
        columnCount={6}
        data={dataPracticeAreas}
        backgroundColor={3}
      />
      <RowButton buttonTo="/casestudies" buttonText="Case Studies" />
      <Spacer height={40} />
      {dataPracticeAreas.map((props: ICalloutProps) => (
        <Callout {...props} key={props.id} />
      ))}
    </>
  );
};

export default PracticeAreasPage;
