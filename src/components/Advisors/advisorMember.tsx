import styled from "styled-components";
import {
  COLOR_BASE_4,
  COLOR_BASE_TEXT,
  COLOR_TEXT,
  TEAM_MEMBER_HEIGHT_PX,
  TEAM_MEMBER_PHOTO_PX,
  TEAM_MEMBER_WIDTH_PX,
} from "../../styles/Constants";

const AdvisorMember = ({ id, nameFirst, nameLast, role, photo }) => {
  // const imgsrc = "/images/about/" + photo;

  return (
    <AdvisorMemberWrapper key={id}>
      {/* <AdvisorMemberPhoto src={imgsrc} style={{transform: `scale(${photoScale})`}} /> */}
      <AdvisorMemberSquare />
      <AdvisorMemberName>
        {nameFirst} {nameLast}
      </AdvisorMemberName>
      <AdvisorMemberRole>{role}</AdvisorMemberRole>
    </AdvisorMemberWrapper>
  );
};

const AdvisorMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  height: ${TEAM_MEMBER_HEIGHT_PX};
  min-width: ${TEAM_MEMBER_WIDTH_PX};
  /* background: gold; */
`;

/*
const AdvisorMemberPhoto = styled.img`
  filter: grayscale(100%);
  height: ${TEAM_MEMBER_PHOTO_PX};
  width: ${TEAM_MEMBER_PHOTO_PX};
  border-radius: 50%;
  object-fit: cover;
  clip-path: circle(70px at center);
  background: ${COLOR_BASE_2};
  transform:translateY(0px);
`;
*/

const AdvisorMemberSquare = styled.img`
  height: ${TEAM_MEMBER_PHOTO_PX};
  width: ${TEAM_MEMBER_PHOTO_PX};
  background: ${COLOR_BASE_4};
  transform: translateY(0px);
  border: none;
`;

const AdvisorMemberName = styled.div`
  margin-top: 12px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.3em;
  color: ${COLOR_BASE_TEXT};
  display: flex;
  align-items: center;
  height: 40px;
  /* background: red; */
`;

const AdvisorMemberRole = styled.div`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 0.9em;
  color: ${COLOR_TEXT};
  display: flex;
  align-items: center;
  height: 24px;
  /* background: blue; */
`;

export default AdvisorMember;
