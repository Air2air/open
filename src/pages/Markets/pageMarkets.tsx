import { useQuery } from "react-query";
import ChartMarkets from "components/Chart/Markets/chartMarkets";
import RowButton from "components/Button/rowButton";
import { COLOR_BASE } from "constants/index";
import BannerVideo from "components/BannerVideo/bannerVideo";
import BannerText from "components/BannerText/bannerText";
import Callout from "components/Callout/callOut";

const dataSource = "data/dataMarkets.json";
const queryName = "markets";

const MarketsPage = () => {
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
      {status === "error" && (
        <p style={{ color: "red" }}>Error fetching data</p>
      )}
      {status === "loading" && (
        <>
          <BannerVideo
            pageVideo={784844948}
            overlayOpacity={0.4}
            overlayColor={COLOR_BASE}
            typing={true}
          />
          <BannerText text="markets" />
        </>
      )}
      {status === "success" && (
        <>
          <BannerVideo
            pageVideo={784844948}
            overlayOpacity={0.4}
            overlayColor={COLOR_BASE}
            typing={true}
          />
          <BannerText text="markets" />
          <ChartMarkets columnCount={5} data={data} backgroundColor={1} />
          <RowButton buttonTo="/vision" buttonText="Vision" />
          {data.map((props, index) => (
            <Callout key={index} {...props} />
          ))}
        </>
      )}
    </>
  );
};

export default MarketsPage;
