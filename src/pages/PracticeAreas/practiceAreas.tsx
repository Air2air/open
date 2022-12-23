import Callout from "components/Callout/callOut";
import { dataPracticeAreas } from "./dataPracticeAreas";
import { ICalloutProps } from "interfaces/callouts";
import Spacer from "components/Spacer/spacer";
import { COLOR_BASE } from "constants/index";
import HeadingPracticeAreas from "components/Heading/headingPracticeAreas";
import RowButton from "components/Button/rowButton";

const PracticeAreasPage = () => {
  return (
    <>
      <Spacer height={120} />
      {/* <ChartPracticeAreas backgroundColor={COLOR_BASE} /> */}
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
