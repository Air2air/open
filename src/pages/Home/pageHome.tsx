import { useQuery } from "react-query";
import OrgsCallout from "../../components/OrgsCallout/orgsCallOut";
import ChartHome from "components/Chart/Home/chartHome";
import RowButton from "components/Button/rowButton";
import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "constants/index";
import { dataHome } from "./dataHome";
import { BannerText } from "components/BannerText/bannerText";

const dataSource = "data/dataHome.json";
const queryName = "home";

const HomePage = () => {
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

  const loopEndTime = 14000;

  return (
    <>
      {status === "error" && (
        <p style={{ color: "red" }}>Error fetching data</p>
      )}
      {status === "loading" && (
        <BannerVideo
          text="home"
          pageVideo={776443340}
          overlayOpacity={0.1}
          overlayColor={COLOR_BASE}
          loopEndTime={loopEndTime}
        />
      )}
      {status === "success" && (
        <>
          <BannerVideo
            pageVideo={776443340}
            overlayOpacity={0.1}
            overlayColor={COLOR_BASE}
            loopEndTime={loopEndTime}
          />
          <BannerText text="home" />
          <ChartHome
            columnCount={7}
            data={dataHome}
            loopEndTime={loopEndTime}
            backgroundColor={1}
          />
          <RowButton
            buttonTo="/practice_areas"
            buttonText="What we do"
            backgroundColor={4}
          />
          <OrgsCallout />
        </>
      )}
    </>
  );
};

export default HomePage;
