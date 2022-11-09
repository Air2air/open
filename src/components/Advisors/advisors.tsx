import styled from "styled-components";
import AdvisorMember from "./advisorMember";
import { dataAdvisors } from "./dataAdvisors";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TitleCallout } from "../Title/titleCallout";
import Container from "../Container/container";

const sortedDataAdvisors = dataAdvisors.sort((a, b) =>
  a.nameFirst > b.nameFirst ? 1 : -1
);

const Advisors = (props) => {
  const advisorsMap = sortedDataAdvisors.map((props) => (
    <AdvisorMember
      key={props.id}
      id={props.id}
      nameFirst={props.nameFirst}
      nameLast={props.nameLast}
      photo={props.photo}
    />
  ));

  return (
    <>
      <Container>
        <TitleCallout titleText={props.advisorsTitle} />
        <AdvisorsContainer animateIn="animate__fadeIn" delay={0} offset={30}>
          <AdvisorsGrid>{advisorsMap}</AdvisorsGrid>
        </AdvisorsContainer>
      </Container>
    </>
  );
};

const AdvisorsContainer = styled(AnimationOnScroll)`
  display: flex;
  width: 100%;
  height: auto;
`;

const AdvisorsGrid = styled.div`
  margin: 0 auto;
  display: grid;
  flex: 0 0 100%;
  gap: 2rem;
  padding: 40px 0 0 0;
  width: 100%;
  @media (min-width: 701px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 301px) and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  height: auto;
`;

export default Advisors;
