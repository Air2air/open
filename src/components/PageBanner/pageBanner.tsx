import styled from "styled-components";
import VideoCallout from "../VideoCallout/videoCallout";

export const PageBanner = ({ pageTitle, pageSubTitle, video }) => {
  return (
    <>
      <Wrapper>
        {video > 0 ? <VideoCallout video={video} /> : ""}
        <PageTitle>{pageTitle}</PageTitle>
        <PageSubTitle>{pageSubTitle}</PageSubTitle>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 0 20vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 400px;
  width: 100%;
  background: black;
`;

const PageTitle = styled.div`
  color: red;
  font-size: "2em";
`;
const PageSubTitle = styled.div`
  color: white;
  font-size: "1.3em";
`;

export default PageBanner;
