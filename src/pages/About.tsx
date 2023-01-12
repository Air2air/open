import BannerVideo from "components/Banner/bannerVideo";
import Map from "components/Map/map";
import { RowButton } from "components/Button/rowButton";
import BannerText from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";
import { useQuery } from "react-query";
import TeamList from "components/Team/team";

const dataSource = "/data/dataTeam.json";
const queryName = "team";


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



  return (
    <>
      <BannerVideo pageVideo={776449715} overlayOpacity={0.7} />
      <BannerText text="about" />
      <Map title="Elevens Worldwide" backgroundColor={2} />
      <TeamList jsonFile="/data/dataTeam.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/contact" buttonText="Contact" />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default AboutPage;
