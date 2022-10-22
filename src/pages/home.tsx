import styled from "styled-components";
import PageBanner from "../components/PageBanner/pageBanner";
import { dataTeam } from "../data/team";

const pageTitle = "Elevens Vision";
const pageSubTitle =
  "Cybersecurity is fundamental to maintaining our way of life. It is essential for global commerce. The lights simply don't turn on without it. At Ten Eleven, we empower founders to create cybersecurity technologies that make our world more secure.";
const video = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/NIHmZbghlilb1qj7b/videoblocks-bacteria-virus-or-germs-microorganism-cells-under-microscope-with-depth_huxxzteyi__85fcc74c9b372b7e15a77bcaa433e568__P360.mp4";
const overlayOpacity = 0.5
const overlayColor = 'indigo'

const HomePage = (section) => {
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageSubTitle={pageSubTitle}
        video={video}
        overlayOpacity={overlayOpacity}
        overlayColor={overlayColor}
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
