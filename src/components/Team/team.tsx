/* eslint-disable react/prop-types */
import Button from "components/Button/button";
import { CalloutSkeleton } from "components/Callout/calloutComponents";
import Container from "components/Container/container";
import { TitleCallout } from "components/Callout/titleCallout";
import { FetchData } from "fetch/fetch";
import {
  PaddingSection,
  TeamContainer,
  TeamGrid,
  TeamMemberWrapper,
  ImageWrapper,
  TeamMemberName,
} from "./teamComponents";

const TeamList = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return <CalloutSkeleton />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const sortedDataTeam = data.sort((a, b) =>
  //   a.nameFirst > b.nameFirst ? 1 : -1
  // );

  return data && data.length > 0 ? (
    <Container backgroundColor={0}>
      <PaddingSection>
        <TitleCallout title="Team" />
        <TeamContainer animateIn="animate__fadeIn" delay={0} offset={30}>
          <TeamGrid>
            {data.map((props) =>
              props.category === "Advisor" ? (
                <TeamMemberWrapper key={props.id}>
                  <ImageWrapper
                    style={{
                      backgroundImage: `url(/images/team/${props.photo})`,
                    }}
                  />
                  <TeamMemberName>
                    {props.nameFirst} {props.nameLast}
                  </TeamMemberName>
                  <Button to={props.linkedin} text="LinkedIn" />
                </TeamMemberWrapper>
              ) : null
            )}
          </TeamGrid>
        </TeamContainer>
      </PaddingSection>
    </Container>
  ) : (
    <div style={{ color: "white" }}>Data Fetch error in Team component</div>
  );
};

export default TeamList;
