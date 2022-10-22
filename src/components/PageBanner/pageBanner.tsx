import { BANNER_HEIGHT, HEADER_HEIGHT } from "../../styles/Constants";
import styled from "styled-components";
import VideoCallout from "../VideoCallout/videoCallout";

export const PageBanner = ({ pageTitle, pageSubTitle, video }) => {
  return (
    <>
      <PageBannerWrapper>
        {video ? <VideoCallout video={video} /> : ""}
        <PageBannerOpacityOverlay />
        <TextWrapper>
          <PageTitle>{pageTitle}</PageTitle>
          <PageSubTitle>{pageSubTitle}</PageSubTitle>
        </TextWrapper>

      </PageBannerWrapper>
    </>
  );
};

const PageBannerWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${BANNER_HEIGHT};
  width: 100vw;
  overflow: hidden;
`;

const PageBannerOpacityOverlay = styled.div`
  position: absolute;
  top: 0;
  left:0;
  height: ${BANNER_HEIGHT};
  width: 100vw;
  background-color: rgba(0,0,0,0.5);
`;

const TextWrapper = styled.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  width: 60%;
  text-align: left;
`;

const PageTitle = styled.div`
  color: red;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight:100;
  font-size: 2em;
  margin-bottom:.8em;
  height: auto;
  text-align: left;
`;

const PageSubTitle = styled.div`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight:300;
  font-size: 1.5em;
  line-height: 1.3em;
  height: auto;
  text-align: left;
`;

export default PageBanner;
