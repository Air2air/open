import { useQuery } from "react-query";
import BannerVideo from "components/Banner/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import Callout from "components/Callout/callOut";
import RowButton from "components/Button/rowButton";
import ChartVision from "components/Chart/Vision/chartVision";
import { BannerText } from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";
import BannerLoading from "components/Banner/bannerLoading";

const dataSource = "/data/dataVision.json";
const queryName = "vision";

const VisionPage = () => {
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
          <BannerText text="vision" />
        </>
      )}
      {status === "success" && (
        <>
          <BannerVideo
            pageVideo={776451115}
            overlayOpacity={0.1}
            overlayColor={COLOR_BASE}
          />
          <BannerText text="vision" />
          <ChartVision
            loopEndTime={loopEndTime}
            columnCount={7}
            data={data}
            backgroundColor={3}
          />

          <RowButton
            buttonTo="/history"
            buttonText="History"
            backgroundColor={3}
          />
          <Spacer height={40} backgroundColor={3} />
          {data.map((props, index) => (
            <Callout key={index} {...props} />
          ))}

          <Spacer height={40} backgroundColor={3} />
          <RowButton
            buttonTo="/history"
            buttonText="History"
            backgroundColor={3}
          />
          <Spacer height={40} backgroundColor={3} />
        </>
      )}
    </>
  );
};

export default VisionPage;
