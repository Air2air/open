import styled from "styled-components";
import PageBanner from "../components/PageBanner/pageBanner";
import { dataTeam } from "../data/team";

const pageTitle = "Elevens Vision";
const pageSubTitle =
  "Cybersecurity is fundamental to maintaining our way of life. It is essential for global commerce. The lights simply don't turn on without it. At Ten Eleven, we empower founders to create cybersecurity technologies that make our world more secure.";
const video = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/NIHmZbghlilb1qj7b/videoblocks-loop-rotation-of-coronavirus-covid-2019_bo3_auxrl__01f6752c0b25fb22f8b135293931b14d__P360.mp4";
  // "https://res.cloudinary.com/dv7ollzw5/video/upload/v1619209051/Bloom_Alpha.webm";


const HomePage = (section) => {
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageSubTitle={pageSubTitle}
        video={video}
        videoOpacity={0.3}
      />
      <TeamGrid>
        {dataTeam.map((props) => (
          <TeamMember key={props.id} />
        ))}
      </TeamGrid>
    </>
  );
};

export default HomePage;

const TeamGrid = styled.div`
  display: grid;
  height: 200px;
  width: "100%";
  background: red;
`;

const TeamMember = styled.div`
  height: 200px;
  width: "100%";
  background: gold;
`;
