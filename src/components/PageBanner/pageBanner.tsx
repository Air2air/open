import { BANNER_HEIGHT_PX } from "../../styles/Constants";
import styled from "styled-components";
import VideoCallout from "../VideoCallout/videoCallout";
import TypeWriterEffect from "react-typewriter-effect";

// const myRef = document.querySelector(".scrollable-div");

export const PageBanner = ({
  pageTitle,
  pageSubTitle,
  pageVideo,
  overlayOpacity,
  overlayColor,
  textColor,
  typing
}) => {
  return (
    <>
      <PageBannerWrapper>
        {pageVideo ? (
          <VideoCallout
            pageVideo={pageVideo}
            overlayOpacity={overlayOpacity}
            overlayColor={overlayColor}
          />
        ) : (
          ""
        )}
        <TextWrapper>
          <PageTitle style={{ color: textColor && textColor }}>{pageTitle}</PageTitle>
          {typing ? (
            <TypeWriterParagraph
              textStyle={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 300,
                fontSize: "1.5em",
                lineHeight: "1.5em",
                color: "white",
              }}
              startDelay={10}
              cursorColor="white"
              text={pageSubTitle}
              typeSpeed={1}
            />
          ) : (
            <PageSubTitle>{pageSubTitle}</PageSubTitle>
          )}
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
  height: ${BANNER_HEIGHT_PX};
  width: 100vw;
  overflow: hidden;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  width: 60%;
  text-align: left;
`;

const PageTitle = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 100;
  font-size: 2.7em;
  margin-bottom: 0.8em;
  height: auto;
  text-align: left;
`;

const PageSubTitle = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.3em;
  height: auto;
  text-align: left;
`;

const TypeWriterParagraph = styled(TypeWriterEffect)`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.3em;
  height: auto;
  text-align: left;
`;

export default PageBanner;
