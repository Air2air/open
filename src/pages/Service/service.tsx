import setBodyColor from "./../../utils/setBodyColor";
import { COLOR_BASE } from "./../../styles/Constants";
import BannerSpacer from "./../../components/BannerSpacer/bannerSpacer";
import CalloutBullet from "../../components/Callout/callOutBullet";
import { dataService } from "./dataService";
import { TitleCentered } from "./../../components/Title/titleCentered";


const ServicePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerSpacer />
      <TitleCentered title="Services"/>
      {dataService.map((props) => (
        <CalloutBullet
          id={props.id}
          title={props.title}
          text={props.text}
          backgroundColor={props.backgroundColor}
          buttonText={props.buttonText}
          buttonTo={props.buttonTo}
        />
      ))}
    </>
  );
};

export default ServicePage;

