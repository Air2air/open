import { useQuery } from "react-query";
import OrgsCallout from "components/OrgsCallout/orgsCallOut";
import ChartHome from "components/Callout/Chart/Home/chartHome";
import RowButton from "components/Button/rowButton";
import BannerVideo from "components/Banner/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import { BannerText } from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";
import BannerLoading from "components/Banner/bannerLoading";

const dataSource = "/data/dataHome.json";
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
        <>
          <BannerLoading />
          <BannerText text="error" />
        </>
      )}
      {status === "loading" && (
        <>
          <BannerLoading />
          <BannerText text="home" />
        </>
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
            data={data}
            loopEndTime={loopEndTime}
            backgroundColor={2}
          />

          {/* <Spacer height={40} backgroundColor={2} /> */}
          <RowButton
            buttonTo="/whatwedo"
            buttonText="What we do"
            backgroundColor={2}
          />
          <Spacer height={40} backgroundColor={2} />

          <OrgsCallout backgroundColor={1} />
        </>
      )}
    </>
  );
};

export default HomePage;
