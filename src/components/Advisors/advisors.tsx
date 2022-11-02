import styled from "styled-components";
import AdvisorMember from "./advisorMember";
import { dataAdvisors } from "../../data/advisors";
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
      role={props.role}
      photo={props.photo}
    />
  ));

  return (
    <>
      <Container>
        <TitleCallout titleText={props.advisorsTitle} />
        <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={30}>
          <AdvisorsGrid style={{ background: props.backgroundColor }}>
            {advisorsMap}
          </AdvisorsGrid>
        </AnimationOnScroll>
      </Container>
    </>
  );
};

const AdvisorsGrid = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  padding-top: 50px;
  max-width: 1000px;
  @media (min-width: 701px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 301px) and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  height: auto;
  /* background: red; */
`;

export default Advisors;
