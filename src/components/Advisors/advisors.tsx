import styled from "styled-components";
import AdvisorMember from "./advisorMember";
import { dataAdvisors } from "./dataAdvisors";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TitleCallout } from "./../Title/titleCallout";
import Container from "./../Container/container";
import { BREAKPOINT } from "styles/Constants";

interface IAdvisorsProps {
  title?: string;
  id?: number;
  order?: number;
  nameLast?: string;
  nameFirst?: string;
  role?: string;
  text?: string;
  photo?: string;
  linkedin?: string;
  backgroundColor?: number;
  buttonColor?: any;
}

const sortedDataAdvisors = dataAdvisors.sort((a, b) =>
  a.nameFirst > b.nameFirst ? 1 : -1
);

const Advisors = (props: IAdvisorsProps) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <PaddingSection>
          <TitleCallout title="Advisors" />
          <AdvisorsContainer animateIn="animate__fadeIn" delay={0} offset={30}>
            <AdvisorsGrid>
              {sortedDataAdvisors.map((props) => (
                <AdvisorMember key={props.id} {...props} />
              ))}
            </AdvisorsGrid>
          </AdvisorsContainer>
        </PaddingSection>
      </Container>
    </>
  );
};

const AdvisorsContainer = styled(AnimationOnScroll)`
  display: flex;
  width: 100%;
  height: auto;
`;

const advisorsPaddingDesktop = 30;
const advisorsPaddingMobile = 20;

const PaddingSection = styled.div`
  width: "100%";
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    padding: ${advisorsPaddingDesktop}px 0;
  }

  @media (max-width: ${BREAKPOINT}px) {
    padding: ${advisorsPaddingMobile}px 0;
  }
  /* background: gold; */
`;

const AdvisorsGrid = styled.div`
  display: grid;
  flex: 0 0 100%;
  gap: 2rem;
  /* padding: 10px 0 0 0; */
  width: 100%;
  height: auto;
  @media (min-width: 701px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 301px) and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* background: gold; */
`;

export default Advisors;
