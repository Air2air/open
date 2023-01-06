import { BREAKPOINT, COLOR_BLACK } from "styles/Constants";
import styled from "styled-components";

import { BANNER_HEIGHT_DESKTOP, BANNER_HEIGHT_MOBILE } from "./bannerCSS";

export const BannerLoading = () => {
  return (
    <>
      <BannerLoadingWrapper />
    </>
  );
};

const BannerLoadingWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  overflow: hidden;
  background: ${COLOR_BLACK};
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

export default BannerLoading;

//
