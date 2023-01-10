import BannerVideo from "components/Banner/bannerVideo";
import Map from "components/Map/map";
import { RowButton } from "components/Button/rowButton";
import BannerText from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";
import { useQuery } from "react-query";
import BannerLoading from "components/Banner/bannerLoading";
import Container from "components/Container/container";
import {
  PaddingSection,
  TeamContainer,
  TeamGrid,
  TeamMemberName,
  TeamMemberWrapper,
  ImageWrapper,
} from "components/Team/teamComponents";
import { TitleCallout } from "components/Title/titleCallout";
import Button from "components/Button/button";

const dataSource = "/data/dataTeam.json";
const queryName = "team";
const defaultImage = "url(/images/team/man_icon.png)";

const AboutPage = () => {
  const fetchData = async () => {
    const res = await fetch(dataSource, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.json();
  };
  const { data, status } = useQuery(queryName, fetchData);

  // const sortedDataTeam = data.sort((a, b) =>
  //   a.nameFirst > b.nameFirst ? 1 : -1
  // );

  return (
    <>
      {status === "error" && (
        <>
          <BannerLoading />
          <BannerText text="error" />
        </>
      )}
      {status === "loading" && (
        <>
          <BannerLoading />
          <BannerText text="markets" />
        </>
      )}
      {status === "success" && (
        <>
          <BannerVideo pageVideo={776449715} overlayOpacity={0.7} />
          <BannerText text="about" />
          <Map title="Elevens Worldwide" backgroundColor={1} />

          {data && data.length > 0 ? (
            <Container backgroundColor={1}>
              <PaddingSection>
                <TitleCallout title="Team" />
                <TeamContainer
                  animateIn="animate__fadeIn"
                  delay={0}
                  offset={30}
                >
                  <TeamGrid>
                    {data.map((props) =>
                      props.category === "Advisor" ? (
                        <TeamMemberWrapper key={props.id}>
                          <ImageWrapper
                            style={{
                              backgroundImage: !props.showPhoto
                                ? defaultImage
                                : `url(/images/team/${props.photo})`,
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
            <div style={{ color: "white" }}>
              Data Fetch error in Page component
            </div>
          )}

          <Spacer height={40} backgroundColor={2} />
          <RowButton buttonTo="/contact" buttonText="Contact" />
          <Spacer height={40} backgroundColor={2} />
        </>
      )}
    </>
  );
};

export default AboutPage;
