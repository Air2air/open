import setBodyColor from "../../utils/setBodyColor";
import { COLOR_BASE } from "../../styles/Constants";
import styled from "styled-components";
import BannerSpacer from "../../components/BannerSpacer/bannerSpacer";
import CalloutBullet from "../../components/Callout/callOutBullet";
import { dataService } from "./dataService";

const serviceMap = dataService.map((props) => (
  <CalloutBullet
    id={props.id}
    calloutTitle={props.title}
    calloutText={props.desc}
    backgroundColor={props.backgroundColor}
    // buttonText={props.buttonText}
    // buttonTo={props.buttonTo}
  />
));


const ServicePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerSpacer />
      <ServiceTitle>Services</ServiceTitle>
      {serviceMap}
    </>
  );
};

export default ServicePage;

const ServiceTitle = styled.h2`
  margin-bottom: 0.8em;
  text-align: center;
`;
