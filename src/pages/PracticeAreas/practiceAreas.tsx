import Callout from "components/Callout/callOut";
import { dataPracticeAreas } from "./dataPracticeAreas";
import { ICalloutProps } from "interfaces/callouts";
import Spacer from "components/Spacer/spacer";
import { COLOR_BASE } from "constants/index";
import HeadingPracticeAreas from "components/Heading/headingPracticeAreas";
import RowButton from "components/Button/rowButton";
import { BannerVideo } from "components/VideoBanner/videoBanner";
import ChartPracticeAreas from "components/Chart/PracticeAreas/chartPracticeAreas";



const PracticeAreasPage = () => {
  return (
    <>
      <BannerVideo
        title="Practice Areas "
        text="Practice Areas Page Subtitle, Practice Areas Page Subtitle, Practice Areas Page Subtitle, Practice Areas Page Subtitle "
        pageVideo={776449715}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <ChartPracticeAreas data={dataPracticeAreas} backgroundColor={COLOR_BASE} />
      <HeadingPracticeAreas backgroundColor={COLOR_BASE} />
      <RowButton buttonTo="/casestudies" buttonText="Case Studies" />
      <Spacer height={40} />
      {dataPracticeAreas.map((props: ICalloutProps) => (
        <Callout {...props} key={props.id} />
      ))}
    </>
  );
};

export default PracticeAreasPage;
