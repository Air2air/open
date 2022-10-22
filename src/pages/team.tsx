import styled from "styled-components";
import PageBanner from "../components/PageBanner/pageBanner";
import { dataTeam } from "./../data/team";

const pageTitle = "Elevens Team";
const pageSubTitle =
  "We're a team of seasoned cyber entrepreneurs, operators and investors offering first-hand experience, global perspective and rare connections for transformative cybersecurity companies.";
const video =
  "https://res.cloudinary.com/dv7ollzw5/video/upload/v1619209051/Bloom_Alpha.webm";

const TeamPage = (section) => {
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageSubTitle={pageSubTitle}
        video={video}
      />
      <TeamGrid>
        {dataTeam.map((props) => (
          <TeamMember key={props.id} />
        ))}
      </TeamGrid>
    </>
  );
};

export default TeamPage;

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
