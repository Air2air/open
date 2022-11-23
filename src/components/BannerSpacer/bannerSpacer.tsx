import setBodyColor from "./../../utils/setBodyColor";
import { COLOR_BASE } from "styles/Constants";
import styled from "styled-components";

const BannerSpacer = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <SpacerDiv />
    </>
  );
};

export default BannerSpacer;

const SpacerDiv = styled.div`
  height: 180px;
  width: 100vw;
`;
