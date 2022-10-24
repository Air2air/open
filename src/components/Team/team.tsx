import styled from "styled-components";
import TeamMember from "./teamMember";
import { dataTeam } from "../../data/team";

const Team = () => {
  const teamMap = dataTeam.map((props) => (
    //   <TeamMember {...props} nameLast={props.nameLast}>{props.nameLast}</TeamMember>
      <TeamMember {...props} />
    // <div key={props.id}>{props.nameLast}</div>
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
  display: grid;
  height: 200px;
  width: "100%";
  //background: red;
`;
