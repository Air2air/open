import setBodyColor from "../utils/setBodyColor";
import { COLOR_BASE } from "../styles/Constants";
import Service from "../components/Service/service";
import styled from "styled-components";
import BannerSpacer from "../components/BannerSpacer/bannerSpacer";

const ServicePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerSpacer />
      <ServiceTitle>Services</ServiceTitle>
      <Service />
    </>
  );
};

export default ServicePage;

const ServiceTitle = styled.h2`
  margin-bottom: 0.8em;
  text-align: center;
`;
