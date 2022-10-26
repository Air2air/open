import styled from "styled-components";
import {
  COLOR_BASE_2,
  COLOR_BASE_TEXT,
  COLOR_TEXT,
  TEAM_MEMBER_HEIGHT_PX,
  TEAM_MEMBER_PHOTO_PX,
  TEAM_MEMBER_WIDTH_PX,
} from "../../styles/Constants";

const TeamMember = ({ id, nameFirst, nameLast, apellation, role, photo, photoScale, photoY }) => {
  const imgsrc = "/images/team/" + photo;

  return (
    <TeamMemberWrapper key={id}>
      <TeamMemberPhoto src={imgsrc} style={{transform: `scale(${photoScale})`}} />
      <TeamMemberName>
        {nameFirst} {nameLast}
      </TeamMemberName>
      <TeamMemberRole>{role}</TeamMemberRole>
    </TeamMemberWrapper>
  );
};

const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  height: ${TEAM_MEMBER_HEIGHT_PX};
  min-width: ${TEAM_MEMBER_WIDTH_PX};
  /* background: gold; */
`;

const TeamMemberPhoto = styled.img`
  filter: grayscale(100%);
  height: ${TEAM_MEMBER_PHOTO_PX};
  width: auto;
  border-radius: 50%;
  object-fit: cover;
  clip-path: circle(70px at center);
  background: ${COLOR_BASE_2};
  transform:translateY(0px);
`;

const TeamMemberName = styled.div`
  margin-top: 12px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.3em;
  color: ${COLOR_BASE_TEXT};
  display: flex;
  align-items: center;
  height: 40px;
  /* background: red; */
`;

const TeamMemberRole = styled.div`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 0.9em;
  color: ${COLOR_TEXT};
  display: flex;
  align-items: center;
  height: 24px;
  /* background: blue; */
`;

export default TeamMember;
