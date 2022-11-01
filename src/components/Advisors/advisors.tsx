import styled from "styled-components";
import AdvisorMember from "./advisorMember";
import { dataAdvisors } from "../../data/advisors";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { CONTENT_WIDTH_DESKTOP } from "../../styles/Constants";

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
      <AdvisorsContainer
        style={{ background: props.backgroundColor && props.backgroundColor }}
      >
        <AdvisorsInner>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={30}>
            <h2>{props.advisorsTitle}</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={30}>
            <AdvisorsGrid style={{ background: props.backgroundColor }}>
              {advisorsMap}
            </AdvisorsGrid>
          </AnimationOnScroll>
        </AdvisorsInner>
      </AdvisorsContainer>
    </>
  );
};

const AdvisorsContainer = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
`;

const AdvisorsInner = styled.div`
  margin: 0 auto;
  padding: 70px 0;
  z-index: +1;
  height: auto;
  width: ${CONTENT_WIDTH_DESKTOP};
  text-align: left;
`;

const AdvisorsGrid = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  padding-top: 50px;
  max-width: 1000px;
  @media (min-width: 701px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 301px) and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  height: auto;
  /* background: red; */
`;

export default Advisors;
