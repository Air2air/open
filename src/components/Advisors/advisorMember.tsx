import styled from "styled-components";
import {
  COLOR_BASE_LIGHT,
  COLOR_BASE_TEXT,
  TEAM_MEMBER_HEIGHT,
  TEAM_MEMBER_PHOTO,
  TEAM_MEMBER_WIDTH,
} from "styles/Constants";
import ButtonLinkedIn from "./../Button/buttonLinkedIn";

const AdvisorMember = ({ id, nameFirst, nameLast, photo, linkedin }) => {
  const backgroundImage = "url(/images/team/man_icon.png)";
  return (
    <AdvisorMemberWrapper key={id}>
        <ImageWrapper style={{ backgroundImage: backgroundImage }} />
      <AdvisorMemberName>
        {nameFirst} {nameLast}
      </AdvisorMemberName>
      {/* <AdvisorMemberRole>{role}</AdvisorMemberRole> */}
      <ButtonLinkedIn
            to={linkedin}
            text="Elevens.ai"
          />
    </AdvisorMemberWrapper>
  );
};

const AdvisorMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  height: ${TEAM_MEMBER_HEIGHT}px;
  min-width: ${TEAM_MEMBER_WIDTH}px;
  /* background: gold; */
`;


const ImageWrapper = styled.div`
  width: ${TEAM_MEMBER_PHOTO}px;
  height:${TEAM_MEMBER_PHOTO}px;
  background-size: cover;
  background-color: ${COLOR_BASE_LIGHT}
`;



const AdvisorMemberName = styled.div`
  margin-top: 12px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.3em;
  color: ${COLOR_BASE_TEXT};
  display: flex;
  align-items: center;
  height: 80px;
  /* background: red; */
`;

/* const AdvisorMemberRole = styled.div`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 0.9em;
  color: ${COLOR_TEXT};
  display: flex;
  align-items: center;
  height: 24px;

`; */

export default AdvisorMember;
