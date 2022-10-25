import styled from "styled-components";
import TeamMember from "./teamMember";
import { dataTeam } from "../../data/team";

const sortedDataTeam = dataTeam.sort((a, b) => (a.order > b.order ? 1 : -1));

const Team = () => {
  const teamMap = sortedDataTeam.map((props) => (
    <>
      <TeamMember
        id={props.id}
        nameFirst={props.nameFirst}
        nameLast={props.nameLast}
        apellation={props.appellation}
        role={props.role}
      />
    </>
  ));

  console.log(teamMap);

  return (
    <>
      <TeamGrid>{teamMap}</TeamGrid>
    </>
  );
};

export default Team;

const TeamGrid = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  max-width: 1000px;

  @media (min-width: 901px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 701px) and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 301px) and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  height: auto;
  /* background: red; */
`;
