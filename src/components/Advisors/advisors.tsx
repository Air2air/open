import styled from "styled-components";
import AdvisorMember from "./advisorMember";
import { dataAdvisors } from "./dataAdvisors";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TitleCallout } from "./../Title/titleCallout";
import Container from "./../Container/container";
import setBodyColor from "./../../utils/setBodyColor";

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
  setBodyColor({ color: props.backgroundColor });

  return (
    <>
       <Container backgroundColor="">
        <TitleCallout title="Advisors" />
        <AdvisorsContainer animateIn="animate__fadeIn" delay={0} offset={30}>
          <AdvisorsGrid>
            {sortedDataAdvisors.map((props) => (
              <AdvisorMember key={props.id} {...props} />
            ))}
          </AdvisorsGrid>
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
  display: grid;
  flex: 0 0 100%;
  gap: 2rem;
  /* padding: 10px 0 0 0; */
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
