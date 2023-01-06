import { useQuery } from "react-query";
import ChartMarkets from "components/Chart/Markets/chartMarkets";
import RowButton from "components/Button/rowButton";
import { COLOR_BASE } from "styles/Constants";
import BannerVideo from "components/Banner/bannerVideo";
import BannerText from "components/Banner/bannerText";
import Callout from "components/Callout/callOut";
import Spacer from "components/Spacer/spacer";

const dataSource = "/data/dataMarkets.json";
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

          {/* <Spacer height={40} backgroundColor={2} /> */}
          <RowButton
            buttonTo="/vision"
            buttonText="Vision"
            backgroundColor={1}
          />
          <Spacer height={40} backgroundColor={1} />

          {data.map((props, index) => (
            <Callout key={index} {...props} />
          ))}
        </>
      )}
    </>
  );
};

export default MarketsPage;
