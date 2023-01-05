import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_BASE_LIGHT,
  COLOR_BASE_TEXT,
  FONT_CONDENSED_DESKTOP,
  FONT_CONDENSED_MOBILE,
} from "styles/Constants";
import ButtonLinkedIn from "./../Button/buttonLinkedIn";
import {
  TEAM_MEMBER_HEIGHT,
  TEAM_MEMBER_PHOTO,
  TEAM_MEMBER_WIDTH,
} from "./advisorsCSS";

interface IAdvisorProps {
  id: number;
  nameFirst: string;
  nameLast: string;
  photo: string;
  showPhoto: boolean;
  linkedin: string;
}

const defaultImage = "url(/images/team/man_icon.png)";

const AdvisorMember = (props: IAdvisorProps) => {
  return (
    <AdvisorMemberWrapper key={props.id}>
      <ImageWrapper
        style={{
          backgroundImage: !props.showPhoto
            ? defaultImage
            : `url(/images/team/${props.photo})`,
        }}
      />
      <AdvisorMemberName>
        {props.nameFirst} {props.nameLast}
      </AdvisorMemberName>
      <ButtonLinkedIn to={props.linkedin} text="Elevens.ai" />
    </AdvisorMemberWrapper>
  );
};

const AdvisorMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: ${TEAM_MEMBER_HEIGHT}px;
  min-width: ${TEAM_MEMBER_WIDTH}px;
  margin-top: 20px;
  /* background: gold; */
`;

const ImageWrapper = styled.div`
  width: ${TEAM_MEMBER_PHOTO}px;
  height: ${TEAM_MEMBER_PHOTO}px;
  background-size: cover;
  background-color: ${COLOR_BASE_LIGHT};
`;

const AdvisorMemberName = styled.div`
  padding: 12px 0;
  color: ${COLOR_BASE_TEXT};
  display: flex;
  align-items: center;

  /* background: red; */
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_CONDENSED_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_CONDENSED_MOBILE};
  }
`;

export default AdvisorMember;
